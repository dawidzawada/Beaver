import { CodeListItem } from "@domain/Code/components/CodeListItem/CodeListItem";
import { FloatingMenu } from "@shared/components/FloatingMenu/FloatingMenu";
import { Logo } from "@shared/components/Logo/Logo";
import { routerPush } from "@shared/navigation/typedRouting";
import { useCodesStore } from "@store/codes.store";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";

import { listScreenStyleSheet } from "./styles";
export default function List() {
  const { styles } = useStyles(listScreenStyleSheet);
  const { t } = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);

  const [codes, removeCode] = useCodesStore(state => [state.codes, state.removeCode]);

  const toggleMenu = () => setMenuOpened(open => !open);

  const onCodePress = (id: string) => {
    routerPush("/code-overview", { id });
    setMenuOpened(false);
  };

  const onLongCodePress = (id: string) => {
    removeCode(id);
  };

  const onNewCodePress = () => {
    routerPush("/choose-type");
    setMenuOpened(false);
  };

  const onScanCodePress = () => {
    routerPush("/scanner");
    setMenuOpened(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container} testID="list-screen">
        <Logo />
        {codes.length === 0 && (
          <Text testID="no-codes" style={styles.noCodes}>
            {t("list.no-codes")}
          </Text>
        )}

        <FlatList
          data={codes}
          numColumns={1}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <CodeListItem
              key={item.id}
              icon={item.icon}
              name={item.title}
              style={item.style}
              onPress={() => onCodePress(item.id)}
              onLongPress={() => onLongCodePress(item.id)}
            />
          )}
        />

        <FloatingMenu
          opened={menuOpened}
          onScanCodePress={onScanCodePress}
          onNewCodePress={onNewCodePress}
          onToggleMenu={toggleMenu}
        />
      </SafeAreaView>
    </>
  );
}
