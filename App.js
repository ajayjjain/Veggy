import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

let vegan =
["alanine",
"albumen",
"albumin",
"alcloxa",
"aldioxa",
"aliphatic",
"allantoin",
"alligator",
"alpha-hydroxy",
"ambergris",
"amerchol l101",
"amino",
"aminosuccinate",
"angora",
"anchovy",
"anchovies",
"animal fat",
"animal oil",
"arachidonic",
"arachidyl proprionate",
"aspartic",
"avian",
"bacon",
"bee",
"beef",
"bee pollen",
"beeswax",
"biotin",
"bird",
"blood",
"bone",
"brain extract",
"bristles",
"calfskin",
"caprylamine oxide",
"capryl betaine",
"caprylic acid",
"caprylic triglyceride",
"carbamide",
"carmine",
"carminic acid",
"carotene",
"casein",
"caseinate",
"cashmere",
"castor",
"castoreum",
"cat",
"catgut",
"cera flava",
"cerebrosides",
"cetyl alcohol",
"cetyl palmitate",
"cheese",
"chicken",
"chitosan",
"cholesterin",
"choline bitartrate",
"civet",
"cochineal",
"cod liver oil",
"collagen",
"corticosteroid",
"cortisone",
"cysteine",
"cystine",
"dexpanthenol",
"diglycerides",
"dimethyl stearamine",
"dog",
"down",
"duck",
"duodenum substances",
"dye",
"egg",
"elastin",
"emu oil",
"ergosterol",
"estradiol",
"estrogen",
"fatty acid",
"fd&c",
"feather",
"fish",
"fur",
"gel",
"gelatin",
"glyceride",
"glycerin",
"glycerol",
"glyceryl",
"glycreth-26",
"goat",
"guanine",
"hair",
"ham",
"hide glue",
"honey",
"hydrocortisone",
"hydrolyzed animal protein",
"hydrolyzed milk protein",
"insulin",
"isinglass",
"isopropyl lanolate",
"isopropyl myristate",
"isopropyl palmitate",
"keratin",
"lactic acid",
"lactose",
"lamb",
"laneth",
"lanogene",
"lanolin",
"lanosterols",
"lard",
"leather",
"linoleic",
"lipase",
"lipid",
"lipoid",
"liver",
"marine",
"meat",
"methionine",
"milk",
"mink",
"monoglyceride",
"musk",
"myristal ether sulfate",
"myristic acid",
"myristyls",
"nucleic acids",
"ocenol",
"octyl dodecanol",
"oleic acid",
"oleths",
"oleyl alcohol",
"oleyl arachidate",
"oleyl imidazoline",
"oleyl myristate",
"oleyl oleate",
"oleyl stearate",
"palmitamide",
"palmitamine",
"palmitate",
"palmitic acid",
"panthenyl",
"pearl essence",
"pepsin",
"placenta",
"polyglycerol",
"polypeptides",
"polysorbates",
"pork",
"pristane",
"progesterone",
"propolis",
"rennet",
"rennin",
"resinous glaze",
"retinol",
"royal jelly",
"sable brushes",
"sausage",
"sea turtle",
"shark",
"sheep",
"skin",
"silk",
"snails",
"snake",
"sodium caseinate",
"sodium steroyl lactylate",
"sodium tallowate",
"spermaceti",
"sperm oil",
"sponge",
"squalane",
"stearamide",
"stearamine",
"stearate",
"stearic acid",
"stearic hydrazide",
"stearone",
"stearoxytrimethylsilane",
"stearoyl lactylic acid",
"steroids",
"sterols",
"suede",
"tallow",
"turkey",
"tyrosinase",
"tyrosine",
"urea",
"uric acid",
"veal",
"venison",
"wax",
"whale",
"whey",
"wool",
"yogurt",
"yoghurt"]

let vegetarian =
["alanine",
"albumen",
"albumin",
"alcloxa",
"aldioxa",
"aliphatic",
"allantoin",
"alligator",
"alpha-hydroxy",
"ambergris",
"amerchol l101",
"amino",
"aminosuccinate",
"angora",
"anchovy",
"anchovies",
"animal fat",
"animal oil",
"arachidonic",
"arachidyl proprionate",
"aspartic",
"avian",
"bacon",
"beef",
"biotin",
"bird",
"blood",
"bone",
"bristles",
"calfskin",
"caprylamine oxide",
"capryl betaine",
"caprylic acid",
"caprylic triglyceride",
"carbamide",
"carmine",
"carminic acid",
"carotene",
"casein",
"caseinate",
"cashmere",
"castor",
"castoreum",
"cat",
"catgut",
"cera flava",
"cerebrosides",
"cetyl alcohol",
"cetyl palmitate",
"chicken",
"chitosan",
"cholesterin",
"choline bitartrate",
"civet",
"cochineal",
"cod liver oil",
"collagen",
"corticosteroid",
"cortisone",
"cysteine",
"cystine",
"dexpanthenol",
"diglycerides",
"dimethyl stearamine",
"dog",
"down",
"duck",
"duodenum substances",
"dye",
"elastin",
"emu oil",
"ergosterol",
"estradiol",
"estrogen",
"fd&c",
"feather",
"fish",
"fur",
"gel",
"gelatin",
"glyceride",
"glycerin",
"glycerol",
"glyceryl",
"glycreth-26",
"guanine",
"hair",
"ham",
"hide glue",
"hydrocortisone",
"hydrolyzed animal protein",
"insulin",
"isinglass",
"isopropyl lanolate",
"isopropyl myristate",
"isopropyl palmitate",
"keratin",
"lamb",
"laneth",
"lanogene",
"lanolin",
"lanosterols",
"lard",
"leather",
"linoleic",
"lipase",
"lipid",
"lipoid",
"liver",
"marine",
"meat",
"methionine",
"mink",
"monoglyceride",
"musk",
"myristal ether sulfate",
"myristic acid",
"myristyls",
"nucleic acids",
"ocenol",
"octyl dodecanol",
"oleic acid",
"oleths",
"oleyl alcohol",
"oleyl arachidate",
"oleyl imidazoline",
"oleyl myristate",
"oleyl oleate",
"oleyl stearate",
"palmitamide",
"palmitamine",
"palmitate",
"palmitic acid",
"panthenyl",
"pearl essence",
"pepsin",
"placenta",
"polyglycerol",
"polypeptides",
"polysorbates",
"pork",
"pristane",
"progesterone",
"rennet",
"rennin",
"resinous glaze",
"retinol",
"sable brushes",
"sausage",
"sea turtle",
"shark",
"sheep",
"sheepskin",
"silk",
"snails",
"snake",
"sodium caseinate",
"sodium steroyl lactylate",
"sodium tallowate",
"spermaceti",
"sperm oil",
"sponge",
"squalane",
"stearamide",
"stearamine",
"stearate",
"stearic acid",
"stearic hydrazide",
"stearone",
"stearoxytrimethylsilane",
"stearoyl lactylic acid",
"steroids",
"sterols",
"suede",
"tallow",
"turkey",
"tyrosinase",
"tyrosine",
"urea",
"uric acid",
"veal",
"venison",
"whale",
"wool"]

output = ""
export default class App extends React.Component {
  state = {
    imageUri: null,
    label: null,
  }

  render() {
    let titleImage = null;
    titleImage = (
      <Image
        style={{width: 325, height: 100, marginTop: 50}}
        source={{uri:"https://i.imgur.com/MomxGPH.png"}}
      />
    );
    let TextView = null;
    TextView = (
      <Text style={{ marginTop: 5 }}>
        Press on your dietary restriction to analyze your food item.
      </Text>
    );
    let imageView = null;
    if (this.state.imageUri) {
      imageView = (
        <Image
          style={{ width: 300, height: 300}}
          source={{ uri: this.state.imageUri }}
        />
      );
    }
    else{
      imageView = (
        <Image
          style={{ width: 300, height: 300, borderRadius: 12}}
          source={{ uri: "https://i.imgur.com/rPU6Jlh.jpg" }}
        />
      );
    }

    let labelView = null;
    if (this.state.label) {
      labelView = (
        <Text style={{ margin: 10 , textAlign: 'center', fontFamily:'Helvetica'}}>
          {this.state.label}
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        {titleImage}
        {TextView}
        <View style={styles.container}>
          {imageView}
          {labelView}
          <Button
          title="Vegan"
          onPress={this._pickVegan}
          />

          <Button
          title="Vegetarian (Dairy and Eggs Acceptable)"
          onPress={this._pickVegetarian}
          />

          <Button
          title="Vegetarian (Eggs Unacceptable, Other Dairy Acceptable)"
          onPress={this._pickVegetarianNoEgg}
          />
        </View>
      </View>
    );
  }

  _pickVegan = async () => {
    const {
      cancelled,
      uri,
      base64,
    } = await Expo.ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: '(loading...)',
      });
    }

    const body = {
      requests:[
        {
          image:{
            content: base64,
          },
          features:[
            {
              type: 'TEXT_DETECTION',
              maxResults: 1,
            }
          ]
        },
      ],
    };

    const key = 'AIzaSyBUn6yfX0jzBgzyduz4F65iNNSq6Pg3y2w';
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const parsed = await response.json();
    undefined
    ingredientString = parsed.responses[0].textAnnotations[0].description
    ingredientString = ingredientString.toLowerCase();
    output = "The item is most likely vegan"
    badIngredients = ""
    ingredients = 0;
    for (let i = 0; i < vegan.length; i++) {
      if (ingredientString.indexOf(vegan[i]) != -1) {
        badIngredients = badIngredients + vegan[i] + ", ";
        ingredients = ingredients + 1;
      }
    }
    if (ingredients == 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegan due to the following ingredient: " + badIngredients;
    }
    else if (ingredients > 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegan due to the following ingredients: " + badIngredients;
    }
    this.setState({
      label: output,
    });
  }


  _pickVegetarian = async () => {
    const {
      cancelled,
      uri,
      base64,
    } = await Expo.ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: '(loading...)',
      });
    }

    const body = {
      requests:[
        {
          image:{
            content: base64,
          },
          features:[
            {
              type: 'TEXT_DETECTION',
              maxResults: 1,
            }
          ]
        },
      ],
    };

    const key = 'AIzaSyBUn6yfX0jzBgzyduz4F65iNNSq6Pg3y2w';
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const parsed = await response.json();
    ingredientString = parsed.responses[0].textAnnotations[0].description
    ingredientString = ingredientString.toLowerCase();
    output = "The item is most likely vegetarian";
    badIngredients = ""
    ingredients = 0;
    for (let i = 0; i < vegetarian.length; i++) {
      if (ingredientString.indexOf(vegetarian[i]) != -1) {
        badIngredients = badIngredients + vegetarian[i] + ", ";
        ingredients = ingredients + 1;
      }
    }
    if (ingredients == 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegetarian due to the following ingredient: " + badIngredients;
    }
    else if (ingredients > 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegetarian due to the following ingredients: " + badIngredients;
    }
    this.setState({
      label: output,
    });
  }

  _pickVegetarianNoEgg = async () => {
    const {
      cancelled,
      uri,
      base64,
    } = await Expo.ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: '(loading...)',
      });
    }

    const body = {
      requests:[
        {
          image:{
            content: base64,
          },
          features:[
            {
              type: 'TEXT_DETECTION',
              maxResults: 1,
            }
          ]
        },
      ],
    };

    const key = 'AIzaSyBUn6yfX0jzBgzyduz4F65iNNSq6Pg3y2w';
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const parsed = await response.json();
    ingredientString = parsed.responses[0].textAnnotations[0].description
    ingredientString = ingredientString.toLowerCase();
    output = "The item is most likely vegetarian"
    badIngredients = ""
    ingredients = 0;
    for (let i = 0; i < vegetarian.length; i++) {
      if (ingredientString.indexOf(vegetarian[i]) != -1) {
        badIngredients = badIngredients + vegetarian[i] + ", ";
        ingredients = ingredients + 1;
      }
    }
    if (ingredientString.indexOf("egg") != -1) {
      badIngredients = vegetarian[i] + ", ";
      ingredients = ingredients + 1;
    }
    if (ingredients == 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegetarian due to the following ingredient: " + badIngredients;
    }
    else if (ingredients > 1){
      badIngredients = badIngredients.substring(0, badIngredients.length - 2);
      output = "The item is most likely not vegetarian due to the following ingredients: " + badIngredients;
    }
    this.setState({
      label: output,
    });
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffe1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
