import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50 pt-9">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
          <View className="bg-white flex-row items-center space-x-5 h-28">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-12 w-12 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
              <Text className="text-lg">Raju Bhai</Text>
              <Text className="text-gray-400">Your Rider</Text>
            </View>

            <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
          </View>
        </View>

        <View className="justify-center items-center bg-[#00CCBB]">
          <Animatable.Image
            source={require("../assets/deliveryscr.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="w-96 h-96"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
