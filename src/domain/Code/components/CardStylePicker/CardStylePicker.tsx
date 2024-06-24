import { View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
import { cardStylePickerStylesheet } from "./CardStylePicker.styles";
import { CardStyleColor } from "@domain/Code/enums/CardStyleColor";
import { BottomSheetFlatList, TouchableOpacity } from "@gorhom/bottom-sheet";
import { CardStyle } from "@domain/Code/types/CardStyle";

const cardStyles: Array<{ name: CardStyle; label: string }> = [
  { name: "Fire", label: "Fire" },
  { name: "Leaf", label: "Leaf" },
  { name: "Sky", label: "Sky" },
  { name: "Deep", label: "Deep" },
  { name: "Coal", label: "Coal" },
  { name: "Plum", label: "Plum" },
];

type Props = {
  onStylePick: (style: CardStyle) => void;
};

export const CardStylePicker = ({ onStylePick }: Props) => {
  const { styles } = useStyles(cardStylePickerStylesheet);
  return (
    <View style={styles.container}>
      <BottomSheetFlatList
        data={cardStyles}
        keyExtractor={item => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card(CardStyleColor[item.name])} onPress={() => onStylePick(item.name)}>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
