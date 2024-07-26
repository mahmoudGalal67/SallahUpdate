import React, { useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import "./HomeElements.css";
import Section from "../Section/Section";

const getSections = [
  {
    id: 1,
    title: "section 1",
  },
  {
    id: 2,
    title: "section 2",
  },
  {
    id: 3,
    title: "section 3",
  },
  {
    id: 4,
    title: "section 4",
  },
  {
    id: 5,
    title: "section 5",
  },
  {
    id: 6,
    title: "section 6",
  },
];

function HomeElements() {
  const [sections, setSections] = useState(getSections);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getSectionsPos = (id) =>
    sections.findIndex((section) => section.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSections((sections) => {
      const originalPos = getSectionsPos(active.id);
      const newPos = getSectionsPos(over.id);

      return arrayMove(sections, originalPos, newPos);
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <ul className="menu-sub home-sections">
        <li className="menu-sub-title">
          <label className="submenu-label back" htmlFor="sub-two">
            عناصر الصفحه الرئيسية
          </label>
          <div className="arrow left">&#8250;</div>
        </li>
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((el) => (
            <Section key={el.id} id={el.id} title={el.title} />
          ))}
        </SortableContext>
      </ul>
    </DndContext>
  );
}

export default HomeElements;
