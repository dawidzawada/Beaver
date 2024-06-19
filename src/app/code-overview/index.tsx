import { CodeDrawer } from "@domain/Code/components/CodeDrawer/CodeDrawer";
import { Code } from "@domain/Code/model/Code";
import { useTypedParams } from "@shared/navigation/typedRouting";
import { useCodesStore } from "@store/codes.store";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { codeOverviewScreenStylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { useTranslation } from "react-i18next";

export default function CodeOverview() {
  const { t } = useTranslation();
  const { id } = useTypedParams<"/code-overview">();
  const getCode = useCodesStore(state => state.getCode);
  const [code, setCode] = useState<Code | undefined>();

  const { styles } = useStyles(codeOverviewScreenStylesheet);

  useEffect(() => {
    setCode(getCode(id));
  }, [id]);

  return (
    <SafeAreaView style={styles.screenWrapper}>
      {code && (
        <>
          <Text style={styles.title}>{code.title}</Text>
          <CodeDrawer type={code.type} value={code.value} height={200} />
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>{t(`code.${code.type}`)}</Text>
          <Text style={styles.label}>Value:</Text>
          <Text style={styles.value}>{code.value}</Text>
        </>
      )}
    </SafeAreaView>
  );
}
