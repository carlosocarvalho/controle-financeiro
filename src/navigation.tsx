import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons as Icon,
} from "@expo/vector-icons";

import Home from "./screens/Home";
import Cast from "./screens/Cast";
import CastResume from "./screens/CastResume";
import Target from "./screens/Target";
import CastButton from "./components/CastButton";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Cast: {
    lib: AntDesign,
    name: "inbox",
  },
  CastResume: {
    lib: Icon,
    name: "chart-pie",
  },
  Target: {
    lib: Icon,
    name: "target",
  },
};

const screens = [
  {
    name: "Home",
    component: Home,
    key: String(Math.random()),
    title: "Inicio",
  },
  {
    name: "Cast",
    component: Cast.List,
    key: String(Math.random()),
    title: "Lancamentos",
  },
  {
    name: "CreateCast",
    component: Cast.Form,
    key: String(Math.random()),
    title: "",
  },
  {
    name: "CastResume",
    component: CastResume,
    key: String(Math.random()),
    title: "Resumo",
  },
  {
    name: "Target",
    component: Target.List,
    key: String(Math.random()),
    title: "Metas",
  },
];
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "CreateCast") return (
            <CastButton />
          );

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.key}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
