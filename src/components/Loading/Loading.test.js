import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Loading from "./Loading";

Enzyme.configure({ adapter: new Adapter() });

describe("Loading", () => {
  it("should render without error", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with props = false", () => {
    const wrapper = shallow(<Loading isLoadingMore={false} />);
    expect(wrapper.find(".loading").length).toBe(1);
  });

  it("should render with props = true", () => {
    const wrapper = shallow(<Loading isLoadingMore={true} />);
    expect(wrapper.find(".loading--small").length).toBe(1);
  });
});
