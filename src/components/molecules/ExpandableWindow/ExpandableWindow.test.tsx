import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { ExpandableWindow } from "../ExpandableWindow";
import "@testing-library/jest-dom";

test("render Expandable Window with Title & Children", () => {
  render(
    <ExpandableWindow title="Expandable Window">
      <p>Children Paragraph</p>
    </ExpandableWindow>
  );

  const titleElement = screen.getByText("Expandable Window");
  const childrenElement = screen.getByText("Children Paragraph");

  expect(titleElement).toBeInTheDocument();
  expect(childrenElement).toBeInTheDocument();
});

test("open and close modal on icon clicked", async () => {
  const dummy_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam expedita non nam, pariatur porro! Expedita rerum excepturi sint in.";

  const WindowElement = render(
    <ExpandableWindow title="Expandable Window">
      <p className="test-paragraph">{dummy_text}</p>
    </ExpandableWindow>
  );

  const expandIcon = WindowElement.container.querySelector("svg[name='expand']");
  expect(expandIcon).not.toBeNull();

  fireEvent.click(expandIcon!);

  await waitFor(() => {
    const removedExpandIcon = WindowElement.container.querySelector("svg[name='expand']");
    expect(removedExpandIcon).toBeNull();
  });

  const dialog = document.querySelector('section[role="dialog"]');
  const collapseIcon = dialog!.querySelector("svg[name='collapse']");
  const dialogElement = dialog?.querySelector("p[class='test-paragraph']");

  expect(dialog).toBeInTheDocument();
  expect(collapseIcon).toBeInTheDocument();
  expect(dialogElement).toBeInTheDocument();
  expect(dialogElement).toHaveTextContent(dummy_text);

  fireEvent.click(collapseIcon!);

  await waitFor(() => {
    expect(dialog).not.toBeInTheDocument();
    expect(collapseIcon).not.toBeInTheDocument();
    expect(dialogElement).not.toBeInTheDocument();
  });
});

test("dialog modal should contain children element", async () => {
  const dummy_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam expedita non nam, pariatur porro! Expedita rerum excepturi sint in.";

  const childrenElement = <p className="test-paragraph">{dummy_text}</p>;

  const WindowElement = render(
    <ExpandableWindow title="Expandable Window">{childrenElement}</ExpandableWindow>
  );

  const expandIcon = WindowElement.container.querySelector("svg[name='expand']");
  fireEvent.click(expandIcon!);

  await waitFor(() => {
    const removedExpandIcon = WindowElement.container.querySelector("svg[name='expand']");
    expect(removedExpandIcon).toBeNull();
  });

  const dialog = document.querySelector('section[role="dialog"]');

  const childParagraph = dialog!.querySelector(".test-paragraph");
  expect(childParagraph).toBeInTheDocument();
  expect(childParagraph!.textContent).toBe(dummy_text);
});

test("render Expandable Window with expandedTitle and expandedChildren on dialog modal", async () => {
  const dummy_text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam expedita non nam, pariatur porro! Expedita rerum excepturi sint in.";

  const childrenElement = <p className="test-paragraph">{dummy_text}</p>;

  const dummy_text_on_dialog_modal = "Dummy text on dialog modal.";

  const childrenElementOnDialogModal = (
    <p className="test-paragraph-on-dialog-modal">{dummy_text_on_dialog_modal}</p>
  );

  const WindowElement = render(
    <ExpandableWindow
      title="Expandable Window"
      expandedTitle="Expandable Window on Dialog Modal"
      expandedChildren={childrenElementOnDialogModal}
    >
      {childrenElement}
    </ExpandableWindow>
  );

  const expandIcon = WindowElement.container.querySelector("svg[name='expand']");
  fireEvent.click(expandIcon!);

  await waitFor(() => {
    const removedExpandIcon = WindowElement.container.querySelector("svg[name='expand']");
    expect(removedExpandIcon).toBeNull();
  });

  const dialog = document.querySelector('section[role="dialog"]');

  const expandedTitleElement = dialog!.querySelector("h2.chakra-heading");
  expect(expandedTitleElement).toBeInTheDocument();
  expect(expandedTitleElement!.textContent).toBe("Expandable Window on Dialog Modal");

  const childParagraph = dialog!.querySelector(".test-paragraph-on-dialog-modal");
  expect(childParagraph).toBeInTheDocument();
  expect(childParagraph!.textContent).toBe(dummy_text_on_dialog_modal);
});
