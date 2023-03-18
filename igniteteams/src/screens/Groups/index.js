import React, { useState } from "react";
import {Container} from "./styles";

// COMPONENTS
import { Highlight } from '../../components/Highlight';
import { Header } from "../../components/Header";
import { GroupCard } from "../../components/GroupCard";
import { FlatList } from "react-native";

export function Groups() {
    const [groups, setGroups] = useState(["Eai Galera!!!", "Amigos"]);

    return (
        <Container>
            <Header />
            <Highlight 
                title="Turmas"
                subtitle="jogue com a sua turma"
            />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
            />

        </Container>
    );
}
