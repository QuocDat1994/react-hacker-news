import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchInput from "./SearchInput";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchInput", () => {
  it("should render without error", () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without error", () => {
    const wrapper = mount(<SearchInput value="Test" onChange={jest.fn()} />);
    expect(wrapper.find("input").props().value).toBe("Test");
  });
});
