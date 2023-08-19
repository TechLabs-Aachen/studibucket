
import { List, Text, useTheme } from 'react-native-paper'

export default function Month() {

    const theme = useTheme();

    return (
        <List.Section>
            <List.Subheader><Text variant="titleLarge">July</Text></List.Subheader>
            <List.Item
                style={{ backgroundColor: theme.colors.primary }}
                titleStyle={{ color: theme.colors.onPrimary }}
                title="BAföG"
                left={() => <List.Icon icon="plus" />}
                right={() => <Text variant="titleMedium">+600 €</Text>}
            />
            <List.Item
                title="Rent"
                left={() => <List.Icon color="#000" icon="minus" />}
                right={() => <Text variant="titleMedium">-400 €</Text>}
            />
        </List.Section>
    );
}