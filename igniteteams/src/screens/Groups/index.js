import React, { useState } from "react";
import {Container} from "./styles";

// COMPONENTS
import { Highlight } from '../../components/Highlight';
import { Header } from "../../components/Header";
import { GroupCard } from "../../components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";

export function Groups() {
    const [groups, setGroups] = useState([]);

    return (
        <Container>
            <Header />
            <Highlight 
                title="Grupos"
                subtitle="jogue com seu grupo"
            />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
                contentContainerStyle={groups.length === 0 && {flex : 1}}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar o primeiro grupo?" />
                )}
            />

        </Container>
    );
}
