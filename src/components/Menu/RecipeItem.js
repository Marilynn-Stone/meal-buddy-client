const mondayFirstMealObject = {
  id: 346591,
  mealName: "Savory Breakfast Casserole",
  cookTimeInMinutes: 45,
  servings: 3,
  imageURL: "https://spoonacular.com/recipeImages/346591-556x370.jpg",
  summaryDescription:
    'You can never have too many main course recipes, so give Savory Breakfast Casserole a try. This recipe makes 3 servings with <b>670 calories</b>, <b>63g of protein</b>, and <b>22g of fat</b> each. For <b>$4.81 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up pepper, milk, egg whites, and a few other things to make it today. To use up the egg whites you could follow this main course with the <a href="https://spoonacular.com/recipes/apple-turnovers-recipe-48175">Apple Turnovers Recipe</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 1 person has tried and liked this recipe. It is a good option if you\'re following a <b>vegetarian</b> diet. It will be a hit at your <b>Christmas</b> event. All things considered, we decided this recipe <b>deserves a spoonacular score of 69%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/paleo-savory-breakfast-casserole-509753">Paleo Savory Breakfast Casserole</a>, <a href="https://spoonacular.com/recipes/savory-hash-brown-breakfast-casserole-680841">Savory Hash Brown Breakfast Casserole</a>, and <a href="https://spoonacular.com/recipes/savory-breakfast-casserole-with-eggs-ham-mushrooms-tomatoes-and-chard-530851">Savory Breakfast Casserole with Eggs, Ham, Mushrooms, Tomatoes and Chard</a> for similar recipes.',
  steps: {
    1: "Preheat oven to 35",
    2: "Combine the milk, 1/2 cup cheddar cheese, green onions, and next 5 ingredients (green onions through eggs), stirring with a whisk.",
    3: "Divide sausage and bread evenly between 2 (8 x 4-inch) loaf pans coated with cooking spray.",
    4: "Pour egg mixture evenly between pans. Top each pan with 1/4 cup cheese.",
    5: "Cover each pan with foil.",
    6: "Bake at 350 for 20 minutes. Uncover and bake an additional 40 minutes or until a wooden pick inserted in center comes out clean.",
    7: "To freeze unbaked casserole: Prepare through Step  Cover with plastic wrap, pressing to remove as much air as possible. Wrap with heavy-duty foil. Store in freezer for up to 2 months.",
    8: "To prepare frozen unbaked casserole: Thaw completely in refrigerator (about 24 hours). Preheat oven to 35",
    9: "Remove foil; reserve foil.",
    10: "Remove plastic wrap; discard wrap. Cover casserole with reserved foil; bake at 350 for 40 minutes. Uncover and bake an additional 50 minutes or until bubbly.",
  },
};


export default function RecipeItem(props) {

  // const data = call server API axios.post("/menu/getmeal", props.mealID)
 


  return (
  <>
    <h1>Recipe Item</h1>
    <h1>${mondayFirstMealObject.title}</h1>
    <p> this is the recipe item</p>
    <br />
    <a href="/menu/">Back to Menu</a>

  </> 
  );
}