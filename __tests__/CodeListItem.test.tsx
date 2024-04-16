import React from "react";
import { render, screen, userEvent } from "@testing-library/react-native";
import { CodeListItem } from "../src/domain/Code/components/CodeListItem/CodeListItem";

describe("<CodeListItem />", () => {
  const mockPress = jest.fn();
  const mockLongPress = jest.fn();
  const mockName = "Mocky-Name";

  it("CodeListItem renders correctly, with proper name", () => {
    render(<CodeListItem type="qrcode" name={mockName} onPress={mockPress} onLongPress={mockLongPress} />);
    const element = screen.getByTestId("code-list-item");
    expect(element).toBeOnTheScreen();
    expect(element).toHaveTextContent(mockName, { exact: false });
  });

  it("Pressing on CodeListItem should trigger a onPress function", async () => {
    jest.useFakeTimers();
    const user = userEvent.setup();

    render(<CodeListItem type="qrcode" name={mockName} onPress={mockPress} onLongPress={mockLongPress} />);
    const element = screen.getByTestId("code-list-item");

    await user.press(element);
    expect(mockPress).toHaveBeenCalled();
  });

  it("Long-pressing on CodeListItem should trigger a onLongPress function", async () => {
    jest.useFakeTimers();
    const user = userEvent.setup();

    render(<CodeListItem type="qrcode" name={mockName} onPress={mockPress} onLongPress={mockLongPress} />);
    const element = screen.getByTestId("code-list-item");

    await user.longPress(element);
    expect(mockLongPress).toHaveBeenCalled();
  });
});
