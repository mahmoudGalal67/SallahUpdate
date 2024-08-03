import React, { useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import "./HomeElements.css";
import Section from "../Section/Section";
import StaticBanner from "../StaticBanner/StaticBanner";

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
  const [modalShow, setModalShow] = useState(false);
  const [sections, setSections] = useState(getSections);
  const [activeEditModal, setactiveEditModal] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor)
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
    <>
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
              <div key={el.id}>
                <Section
                  id={el.id}
                  title={el.title}
                  setModalShow={setModalShow}
                  setactiveEditModal={setactiveEditModal}
                />
              </div>
            ))}
          </SortableContext>
        </ul>
      </DndContext>
      <StaticBanner
        setModalShow={setModalShow}
        modalShow={modalShow}
        activeEditModal={activeEditModal}
      />
    </>
  );
}

export default HomeElements;
