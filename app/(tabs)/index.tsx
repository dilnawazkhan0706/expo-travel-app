import { Fragment, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

import Colors from "@/constants/Colors";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import GroupListings from "@/components/GroupListings";

import listingData from "@/data/destinations.json";
import groupData from "@/data/group.json";

const Page = () => {
  const HEADER_HEIGHT = useHeaderHeight();
  const [category, setCategory] = useState("ALL");

  const onCatChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <Fragment>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Pressable style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </Pressable>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: HEADER_HEIGHT }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerTxt}>Explore The Beautiful World!</Text>
          <View style={styles.searchSectinWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="Search..." />
            </View>
            <Pressable style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </Pressable>
          </View>
          <CategoryButtons onCatChanged={onCatChanged} />
          <Listings listings={listingData} category={category} />
          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectinWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});
