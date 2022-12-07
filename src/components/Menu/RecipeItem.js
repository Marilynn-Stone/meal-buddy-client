import { recipeCall, textMessage } from "../../hooks/serverAndDBCalls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function RecipeItem(props) {

  // const RECIPE = {
  //   id: 924856,
  //   mealName: 'No Effort Vegan Coconut Curry',
  //   cookTimeInMinutes: '25 minutes',
  //   servings: 4,
  //   imageURL: 'https://spoonacular.com/recipeImages/924856-556x370.jpg',
  //   summaryDescription: `No Effort Vegan Coconut Curry might be just the main course you are searching for. This recipe serves 4 and costs $1.85 per serving. One portion of this dish contains about <b>16g of protein</b>, <b>38g of fat</b>, and a total of <b>705 calories</b>. 1 person found this recipe to be flavorful and satisfying. If you have maple syrup, roasted cashews, carrots, and a few other ingredients on hand, you can make it. To use up the zucchini you could follow this main course with the <a href="https://spoonacular.com/recipes/zucchini-dessert-squares-415963">Zucchini Dessert Squares</a> as a dessert. Only a few people really liked this Indian dish. From preparation to the plate, this recipe takes around <b>25 minutes</b>. It is a good option if you're following a <b>gluten free and vegan</b> diet. It is brought to you by Hurry The Food Up. All things considered, we decided this recipe <b>deserves a spoonacular score of 5%</b>. This score is improvable. Similar recipes include <a href="https://spoonacular.com/recipes/spicy-vegan-thai-coconut-red-curry-with-coconut-saffron-rice-843078">Spicy Vegan Thai Coconut Red Curry with Coconut-Saffron Rice</a>, <a href="https://spoonacular.com/recipes/vegan-chickpea-coconut-curry-31697">Vegan Chickpea Coconut Curry</a>, and <a href="https://spoonacular.com/recipes/vegan-banana-squash-coconut-curry-573628">Vegan Banana Squash Coconut Curry</a>.`,
  //   ingredients: {
  //     '1': '1 can coconut milk (1 can = ca. 400ml)',
  //     '2': '2 carrots',
  //     '3': '1.5 cups chickpeas, cooked (1.5 cups = 1 tin (ca. 400g wet weight)',
  //     '4': '2 tsp curry powder',
  //     '5': '1 cup broccoli or green beans',
  //     '6': '1 lemon or lime, juiced',
  //     '7': '2 sticks lemongrass',
  //     '8': '1 cup basmati or whole grain rice cooked',
  //     '9': '1 tbsp maple syrup',
  //     '10': '1 tbsp oil',
  //     '11': '½ cup roasted cashews or peanuts',
  //     '12': '½ tsp salt',
  //     '13': '1 spring onion',
  //     '14': '1 sweet potato',
  //     '15': '1 tbsp yellow curry paste (or red for hotter, green for hottest!)',
  //     '16': '½ zucchini'
  //   },
  //   steps: {
  //     '1': 'If serving with rice, get that cooking now according to package instructions.Grate the sweet potato and the carrots.Chop the spring onion, broccoli, and zucchini.',
  //     '2': 'Add the oil to a large pan and fry all the veg on a medium heat. This needs about 5-7 minutes.Next, add the curry powder and curry paste, and the beaten (smack it with a heavy spoon a few times to let out the flavour) lemongrass.Stir and fry for another couple of minutes then add the coconut milk and the chickpeas.',
  //     '3': 'Let it simmer for another 5 minutes.',
  //     '4': 'Serve with rice and top with the cashews or peanuts. Easy. Awesome.'
  //   }
  // }

  const {id} = useParams();
  
  const [recipe, setRecipe] = useState({steps: {}, ingredients: {}});


  useEffect(() => {
    const fetchData = async() => {
      const data = await recipeCall(Number(id));
      console.log(data)
      setRecipe(data)
    }
    fetchData();
  }, [])


  return (
  <div className="recipe-card"> 
  
    <div className="recipe-card-header">
    <img src={recipe.imageURL} alt="recipe" width="300px" />
    <div className="recipe-card-header-text">
      <h1>{recipe.mealName}</h1>
      <h4>Servings: {recipe.servings} </h4>
      <h4>Cook Time: {recipe.cookTimeInMinutes} </h4>
      </div>
    </div>
      

   
    <div className="steps">
    <h1 className="instructions">Ingredients:</h1>
    <ol>
      {Object.values(recipe.ingredients).map((ingredient) => {
        return <li key={ingredient}>    ~  {ingredient}.<br /></li>;
      })}
    </ol>
    <br />
    <h1 className="instructions">Instructions:</h1>
    <ol>
      {Object.values(recipe.steps).map((step) => {
        return <li key={step}>    ~  {step}.<br /></li>;
      })}
    </ol>
    </div>
    
    <button className="button" onClick={() => textMessage(recipe.ingredients)}>
      <b>Text me this shopping list!</b>
    </button> 
    
  </div> 
  );
}