import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
    Dropdown,
    DropdownContent,
    DropdownContentWrapper,
    SelectWrapper
} from './styles';

// Components
import ArrowToggle from '../arrow-toggle/ArrowToggle';
import HiddenContent from '../hidden-content/HiddenContent';
import Label from '../label/Label';
import SelectNoResults from './SelectNoResults';
import SelectRow from './rows/SelectRow';
import ListSearchInput from '../list-search-input/ListSearchInput';
import ValidationError from '../validation-error/ValidationError';
import SelectInput from './SelectInput';

// Default Props
const defaultProps = {
    children: null,
    hint: '',
    isActive: false,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isOpenToTop: false,
    isReadOnly: false,
    label: '',
    placeholder: '',
    selectAllTag: 'All options',
    searchPlaceholder: 'Type to search',
    spacing: '',
    validation: {
        status: '',
        error: ''
    },
    value: null,
    withSearch: false,
    withSelectAll: false,
    onBlur: () => {},
    onClose: () => {}
};

// Prop Types
const propTypes = {
    children: PropTypes.node,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    })).isRequired,
    hint: PropTypes.node,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
    isOpenToTop: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    selectAllTag: PropTypes.string,
    spacing: PropTypes.string,
    validation: PropTypes.shape({
        status: PropTypes.string,
        error: PropTypes.string
    }),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Array)
    ]),
    withSearch: PropTypes.bool,
    withSelectAll: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func
};

// Constants
const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;
const ROW_HEIGHT = 40;

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive,
            searchValue: '',
            data: [],
            focusedItemIndex: -1
        };

        this.isClicked = false;
    }

    dropdownRef = React.createRef();

    dropdownContentRef = React.createRef();

    handleClickOutside = ({ target }) => {
        const { onClose } = this.props;

        if (!this.dropdownRef.current.contains(target)) {
            this.setState({
                isActive: false,
                focusedItemIndex: -1
            });

            onClose();
        }
    };

    handleDropdownToggle = (event) => {
        // Fix double method calling
        if (event.type === 'focus' && this.isClicked) {
            return;
        }

        const { target } = event;
        const {
            isDisabled,
            isLoading,
            isReadOnly
        } = this.props;

        if (
            !isDisabled
            && !isLoading
            && !isReadOnly
            && target.isSameNode(this.dropdownRef.current)
        ) {
            this.toggleDropdown();
        }
    };

    toggleDropdown = () => {
        const { id, onBlur, onClose } = this.props;
        const { isActive: isActiveState } = this.state;

        this.setState(({ isActive }) => ({
            isActive: !isActive,
            focusedItemIndex: -1
        }), () => {
            if (!isActiveState) {
                onClose();
            }
        });

        onBlur({ id });
    };

    handleSearch = (value) => {
        this.setState({ searchValue: value });
    };

    handleSelect = (optionId) => {
        const {
            id,
            isMulti,
            value,
            onChange
        } = this.props;

        if (isMulti) {
            if (value.includes(optionId)) {
                onChange({ value: value.filter(item => item !== optionId), id });
            } else {
                onChange({ value: [...value, optionId], id });
            }
        } else {
            this.setState({ isActive: false });

            onChange({ value: value === optionId ? null : optionId, id });
        }
    };

    handleSelectAll = () => {
        const { id, value, onChange } = this.props;
        const { data } = this.state;

        if (value.length === data.length) {
            onChange({ value: [], id });
        } else {
            onChange({ value: data.map(({ id: itemId }) => itemId), id });
        }
    };

    handleKeyDown = (event) => {
        const { keyCode } = event;
        const { data, focusedItemIndex } = this.state;

        if ([DOWN_KEY, UP_KEY, ENTER_KEY].includes(keyCode)) {
            event.preventDefault();
        }

        if (keyCode === DOWN_KEY) {
            this.setState({
                focusedItemIndex: data[focusedItemIndex + 1] ? focusedItemIndex + 1 : 0
            }, () => {
                this.dropdownContentRef.current.scrollTop = (focusedItemIndex - 1) * ROW_HEIGHT;
            });
        }

        if (keyCode === UP_KEY) {
            this.setState({
                focusedItemIndex: focusedItemIndex - 1 < 0 ? data.length - 1 : focusedItemIndex - 1
            }, () => {
                this.dropdownContentRef.current.scrollTop = (focusedItemIndex - 1) * ROW_HEIGHT;
            });
        }

        if (keyCode === ENTER_KEY) {
            this.handleSelect(data[focusedItemIndex].id);
        }
    };

    getSearchResult = (data, search) => {
        if (!search) {
            return [];
        }

        return !search ? data : data.filter((option) => {
            return option.name
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    };

    getSelectedData = (data, values) => {
        return data.filter(item => Select.isSelected(values, item.id));
    };

    getNumEmptyRows = (dataLength, withSelectAll) => {
        if (withSelectAll) {
            return dataLength > 7 ? 7 : dataLength;
        }

        return dataLength > 7 ? 7 : dataLength - 1;
    };

    getEmptyRowsData = (dataLength, searchResultLength, withSelectAll) => {
        const generateRowData = quantity => Array.from(Array(quantity), () => Math.random()
            .toString(36)
            .substring(2, 15));

        const lengthWithSelectAll = withSelectAll ? dataLength + 1 : dataLength;

        if (dataLength > 8) {
            return searchResultLength > 8 ? [] : generateRowData(8 - searchResultLength);
        }

        return lengthWithSelectAll - searchResultLength
            ? generateRowData(lengthWithSelectAll - searchResultLength)
            : [];
    };

    static isSelected(value, id) {
        return Array.isArray(value) ? value.includes(id) : value === id;
    }

    static getDerivedStateFromProps({ data }, state) {
        if (data.length !== state.data.length) {
            return {
                ...state,
                data
            };
        }

        return null;
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        const {
            children,
            data: propsData,
            isDisabled,
            isMulti,
            isOpenToTop,
            isLoading,
            isReadOnly,
            label,
            placeholder,
            searchPlaceholder,
            selectAllTag,
            spacing,
            validation,
            value,
            withSearch,
            withSelectAll
        } = this.props;
        const {
            isActive,
            data,
            focusedItemIndex,
            searchValue
        } = this.state;

        const searchResult = this.getSearchResult(data || propsData, searchValue);
        const selectedItems = this.getSelectedData(data, value);

        return (
            <SelectWrapper
                spacing={spacing}
                onKeyDown={this.handleKeyDown}
            >
                { label && <Label isDisabled={isDisabled || isLoading}>{label}</Label> }
                <Dropdown
                    tabIndex="0"
                    onMouseDown={() => { this.isClicked = true; }}
                    onMouseUp={() => { this.isClicked = false; }}
                    onClick={this.handleDropdownToggle}
                    onFocus={this.handleDropdownToggle}
                    isActive={isActive}
                    isDisabled={isDisabled || !data.length || isLoading}
                    isReadOnly={isReadOnly}
                    ref={this.dropdownRef}
                    validation={validation}
                >
                    <DropdownContentWrapper
                        isActive={isActive}
                        isOpenToTop={isOpenToTop}
                    >
                        <HiddenContent isHidden={!withSearch}>
                            <ListSearchInput
                                isFocused
                                placeholder={searchPlaceholder}
                                value={searchValue}
                                onChange={this.handleSearch}
                            />
                        </HiddenContent>
                        <DropdownContent
                            tabIndex="0"
                            ref={this.dropdownContentRef}
                        >
                            {children}
                            <HiddenContent isHidden={!!searchValue}>
                                {
                                    isMulti && withSelectAll && !searchValue
                                    && (
                                        <SelectRow
                                            id="selectAll"
                                            key="selectAll"
                                            onClick={this.handleSelectAll}
                                            isHighlighted
                                            isDisabled={!!searchValue}
                                            isMulti
                                            isActive={data.length === value.length}
                                        >
                                            {selectAllTag}
                                        </SelectRow>
                                    )
                                }
                                {
                                    data.map(({ id, name, ...props }) => (
                                        <SelectRow
                                            {...props}
                                            id={id}
                                            key={id}
                                            isFocused={!!data[focusedItemIndex] && data[focusedItemIndex].id === id}
                                            isMulti={isMulti}
                                            isActive={Select.isSelected(value, id)}
                                            onClick={this.handleSelect}
                                        >
                                            {name}
                                        </SelectRow>
                                    ))
                                }
                            </HiddenContent>
                            <HiddenContent isHidden={!searchValue}>
                                {searchResult.length
                                    ? [
                                        ...searchResult.map(({ id, name, ...props }) => (
                                            <SelectRow
                                                {...props}
                                                id={id}
                                                key={id}
                                                isFocused={!!data[focusedItemIndex] && data[focusedItemIndex].id === id}
                                                isMulti={isMulti}
                                                isActive={Select.isSelected(value, id)}
                                                onClick={this.handleSelect}
                                            >
                                                {name}
                                            </SelectRow>
                                        )),
                                        ...this.getEmptyRowsData(data.length, searchResult.length, withSelectAll).map(key => (
                                            <SelectRow
                                                id={key}
                                                key={key}
                                                onClick={() => {}}
                                            >
                                                {' '}
                                            </SelectRow>
                                        ))
                                    ]
                                    : (
                                        <SelectNoResults
                                            numRows={this.getNumEmptyRows(data.length, withSelectAll)}
                                        >
                                            No results found
                                        </SelectNoResults>
                                    )
                                }
                            </HiddenContent>
                        </DropdownContent>
                    </DropdownContentWrapper>
                    <SelectInput
                        isDisabled={isDisabled || isReadOnly || isLoading}
                        items={selectedItems}
                        placeholder={placeholder}
                        onDelete={this.handleSelect}
                        onClick={this.toggleDropdown}
                    />
                    <HiddenContent isHidden={isLoading || isReadOnly}>
                        <ArrowToggle
                            isActive={isActive}
                            isChevron
                            isDisabled={isDisabled || !data.length}
                        />
                    </HiddenContent>
                </Dropdown>
                <ValidationError>
                    { validation ? validation.error : ''}
                </ValidationError>
            </SelectWrapper>
        );
    }
}

Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

export default Select;
