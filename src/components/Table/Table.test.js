import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Table from "./Table";

Enzyme.configure({ adapter: new Adapter() });

describe("Table", () => {
  const data = [
    {
      objectID: "16582136",
      created_at: "2018-03-14T03:50:30.000Z",
      title: "Stephen Hawking has died",
      url: "http://www.bbc.com/news/uk-43396008",
      author: "Cogito",
      points: 6015
    },
    {
      objectID: "11116274",
      created_at: "2016-02-17T08:38:37.000Z",
      title: "A Message to Our Customers",
      url: "http://www.apple.com/customer-letter/",
      author: "epaga",
      points: 5771
    },
    {
      objectID: "3078128",
      created_at: "2011-10-05T23:42:23.000Z",
      title: "Steve Jobs has passed away.",
      url: "http://www.apple.com/stevejobs/",
      author: "patricktomas",
      points: 4271
    }
  ];

  it("should render table with data", () => {
    const wrapper = shallow(<Table list={data} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render table with data", () => {
    const wrapper = mount(<Table list={data} />);
    expect(wrapper.find("tbody tr").length).toBe(3);
  });

  it("should render empty table", () => {
    const wrapper = shallow(<Table list={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render empty table", () => {
    const wrapper = mount(<Table list={[]} />);
    expect(wrapper.find("tbody tr").length).toBe(0);
  });
});
