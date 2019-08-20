# Auto complete
When we serve a lot of choices, consider using an autocomplete instead of a selectbox or radiobuttons.

- The dropdown shows a single recent or detected item followed by a list of suggestions, controlled by JS.
- A placeholder is used best to tell how many characters the user needs to type before the autocomplete works.

Creates a “[listbox combo](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html)”

## DSM
* ![](https://ultimaker.invisionapp.com/d/main#/console/18252425/378973703/preview)

## AutoCompleteItem
_programmatically derived_

an object containing a title and value, which is programmatically derived from a provided `datasource`. the `title` is a combination of the `datasource` key value and key; e.g. Mexico - MX. the `value` is the `datasource` key; e.g. MX.
```
{
    title: string,
    value: string
}
```

## autoCompleteItems
_programmatically derived_

a collection of `AutoCompleteItem`s, derived from the `datasource` provided. this collection includes all `datasource` items.

## datasource
_api sourced_

a mapped object of key value pairs
```
{
    key: string,
    ...
}
```

## highlightedKeys
_programmatically provided_

a list of strings that correspond with keys in the `datasource`.

## highlightedItems
_programmatically derived_

a collection of `AutoCompleteItem`s, derived from the provided `datasource` using the `highlightedKeys` to identify them. this list is displayed above the `suggestedItems` list. these items are not displayed in the `suggestedItems` list.

## highlightedLabel
_api sourced_

a label displayed over the `highlightedItems` list

## label
_api sourced_

a label to be used for the input field. 

## minChar
_programmatically derived_

minimum number of characters that need to be typed in the input field before the `suggestedItems` list is filtered.

## placeholder
_api sourced_

a placeholder label for the input field.

## showSuggestions
_programmatically derived_

whether or not to display the `suggestedItems` when no input has been typed into the input field.

***note***: this has no influence when something has been typed into the input field. 

## suggestionsLabel
_api sourced_

a label displayed over the `suggestedItems` list

## suggestedItems
_programmatically derived_

a collection of `AutoCompleteItem`s, derived from the provided `datasource`.
