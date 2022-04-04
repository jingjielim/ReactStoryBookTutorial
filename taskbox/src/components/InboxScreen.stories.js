import store from "../lib/store";
import InboxScreen from "./InboxScreen";

import { Provider } from "react-redux";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({})
export const Error = Template.bind({})