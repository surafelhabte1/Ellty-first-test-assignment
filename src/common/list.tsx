import * as React from "react";
import Item, { ItemProps } from "./item.tsx";
import Button from "./button.tsx";
import Divider from "./divider.tsx";

const ListItem = () => {
  const data: any[] = [
    {
      title: "Page 1",
    },
    {
      title: "Page 2",
    },
    {
      title: "Page 3",
    },
    {
      title: "Page 4",
    },
    {
      title: "Page 5",
    },
    {
      title: "Page 6",
    },
  ];

  return (
    <div className='mainContainer'>
      <Item title={"All Pages"} />
      <Divider />
      <div className='listContainer'>
        {data.map((item: ItemProps, index: number) => {
          return <Item title={item?.title} key={index} />;
        })}
      </div>
      <Divider />
      <Button />
    </div>
  );
};

export default ListItem;
