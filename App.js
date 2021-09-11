import React, {useEffect} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, ScrollView, Pressable, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"]

function App() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const productsRef = React.useRef([]);

  useEffect(() => {  
    const getProducts = async () => {
      const products = await (await fetch("https://fakestoreapi.com/products")).json();
      setProducts(products);
      productsRef.current = products;
      setLoading(false);
    }
    getProducts()
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = productsRef.current.filter(product => product.category === selectedCategory);
      setProducts(filteredProducts);
    } else {
      setProducts(productsRef.current);
    }
  }, [selectedCategory]);

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} resizeMode="contain" source={{uri: item.image}} />
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={{marginTop: 15, fontSize: 12}}>{`Category: ${item.category}`}</Text>
          <Text style={{marginTop: 5}}>{`Price: $${item.price}`}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView 
        contentContainerStyle={{paddingHorizontal: 15}} 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          categories.map((category, index) => {
            const isActive = category === selectedCategory;
            return (
              <Pressable 
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                  // if it is already selected, make it null
                  setSelectedCategory(isActive ? null : category);
                }} 
                style={[styles.category, isActive && styles.activeCategory]} 
                key={category}
              >
                <Text style={[styles.categoryTitle, isActive && styles.activeTitle]}>{category}</Text>
              </Pressable>
            )
          })
        }
      </ScrollView>
      <FlatList 
        data={products}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        numColumns={2}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 20
  },
  item: {
    padding: 15,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    borderRadius: 15,
    marginRight: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  category: {
    padding: 10,
    borderWidth: 1, 
    marginRight: 5,
    borderColor: 'purple',
    borderRadius: 15,
  },
  activeTitle: {
    color: '#fff',
  },
  activeCategory: {
    backgroundColor: 'purple',
  }
});


export default App;
