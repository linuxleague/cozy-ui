import { useMemo } from 'react';
import { makeActions, modify, viewInContacts } from "cozy-ui/transpiled/react/ActionsMenu/Actions";
import { makeOptionalActions } from "cozy-ui/transpiled/react/ListItem/ListItemContact/helpers";

var useActions = function useActions(contact) {
  var optionalActions = useMemo(function () {
    return makeOptionalActions(contact);
  }, [contact]);
  var finalActions = useMemo(function () {
    return [modify, viewInContacts].concat(optionalActions);
  }, [optionalActions]);
  var actions = useMemo(function () {
    return makeActions(finalActions);
  }, [finalActions]);
  return actions;
};

export default useActions;