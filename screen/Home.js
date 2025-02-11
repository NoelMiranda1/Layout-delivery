import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {icons, images, SIZES, FONTS, COLORS} from '../constants';

const Home = ({navigation}) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: 'El aguacate',
    gps: {
      latitude: 11.878335774474255,
      longitude: -86.04808153156445,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Noodles',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: 'Salads',
      icon: icons.salad,
    },
    {
      id: 5,
      name: 'Burgers',
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 7,
      name: 'Snacks',
      icon: icons.fries,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 9,
      name: 'Desserts',
      icon: icons.donut,
    },
    {
      id: 10,
      name: 'Drinks',
      icon: icons.drink,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: 'Burger King',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.burger_restaurant_1,
      duration: '30 - 45 min',
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.crispy_chicken_burger,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: images.baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: 'Pizza Hut',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.pizza_restaurant,
      duration: '15 - 20 min',
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: images.hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: images.tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: images.salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'Hotdogs Arleking',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.hot_dog_restaurant,
      duration: '20 - 25 min',
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: images.chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'Sushi いいもの',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.japanese_restaurant,
      duration: '10 - 15 min',
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo: images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'Cuisine',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.noodle_shop,
      duration: '15 - 20 min',
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: images.kolo_mee,
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: images.sarawak_laksa,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: images.nasi_lemak,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: images.nasi_briyani_mutton,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'Dessets',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.kek_lapis_shop,
      duration: '35 - 40 min',
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo: images.teh_c_peng,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo: images.ice_kacang,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo: images.kek_lapis,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );

  function onSelectCategory(category) {
    // Filtro de restaurantes
    let restaurantList = restaurantData.filter((data) =>
      data.categories.includes(category.id),
    );

    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }
  function getCategoryById(id) {
    let category = categories.filter((a) => a.id == id);
    if (category.length > 0) return category[0].name;
    return '';
  }

  function renderheader() {
    return (
      <View style={style.header}>
        <TouchableOpacity style={style.btnheader}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={style.imgheader}
          />
        </TouchableOpacity>
        <View style={style.btnheadercenter}>
          <View style={style.headermid}>
            <Text style={style.headertext}>{currentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity style={style.headerigth}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={style.imgheader}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={
            (style.shadow,
            {
              padding: SIZES.padding,
              paddingBottom: SIZES.padding * 2,
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.primary
                  : COLORS.secondary,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: SIZES.padding,
              width: 110,
            })
          }
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray4,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={style.imgcat}
            />
          </View>
          <Text
            style={{
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              padding: SIZES.padding,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={style.main}>
        <Text style={style.textmain}>Main</Text>
        <Text style={style.textmain}>Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  }

  function renderRestaurant() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={style.rest}
          onPress={() =>
            navigation.navigate('Restaurant', {item, currentLocation})
          }>
          <View style={{marginBottom: SIZES.padding}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={style.imgrest}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...style.shadow,
              }}>
              <Text style={{...FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          {/*informacion del restaurante */}
          <Text style={{...FONTS.body2}}>{item.name}</Text>
          <View
            style={{
              marginTop: SIZES.padding,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                marginRight: 10,
                tintColor: COLORS.primary,
              }}
            />
            <Text style={{...FONTS.body3}}>{item.rating}</Text>
            {/* Categorias */}
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              {item.categories.map((categoryId) => {
                return (
                  <View key={categoryId} style={{flexDirection: 'row'}}>
                    <Text style={{...FONTS.body3}}>
                      {getCategoryById(categoryId)}
                    </Text>
                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}>
                      {' '}
                      .{' '}
                    </Text>
                  </View>
                );
              })}
              {[1, 2, 3].map((priceRating) => (
                <Text
                  key={priceRating}
                  style={{
                    ...FONTS.body3,
                    color:
                      priceRating <= item.priceRating
                        ? COLORS.black
                        : COLORS.darkgray,
                  }}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={style.container}>
      {renderheader()}
      {renderMainCategories()}
      {renderRestaurant()}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    height: 50,
  },
  btnheader: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  imgheader: {
    width: 30,
    height: 30,
  },
  btnheadercenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {
    ...FONTS.h3,
  },
  headermid: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  headerigth: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  main: {
    padding: SIZES.padding * 2,
  },
  textmain: {
    ...FONTS.h1,
  },
  imgcat: {
    width: 40,
    height: 40,
  },
  rest: {
    marginBottom: SIZES.padding * 2,
  },
  imgrest: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
  },
});

export default Home;
