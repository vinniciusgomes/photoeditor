/**
 * Types
 */
export const Types = {
  EXAMPLE_TEMPLATE: "template/EXAMPLE_TEMPLATE",
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  template: "",
};

/**
 * Actions
 */
export const Creators = {
  example: (template) => ({
    type: Types.EXAMPLE_TEMPLATE,
    template,
  }),
};

export default function templateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.EXAMPLE_TEMPLATE:
      return { ...state, template: action.template };
    default:
      return state;
  }
}
