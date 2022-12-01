
//const= <img className="photo" src="https://iili.io/H2kPjtt.png" alt= />;

export default function FullPageMenuItem() {

  return (
    <>
      <section className="menu-table">
        <h1>Menu - full Table</h1>
        <p>Table with all recipes</p>
          <table>
            <tr>
              <th>{ /* empty on purpose - DAYS ROW */ } </th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
            <td className="meal-title">Breakfast</td>
              <td>
                <a href="/">Bfast1</a>           
              </td>
              <td>
                <a href="/">Bfast2</a>          
              </td>
              <td>
                <a href="/">Bfast3</a>          
              </td>
              <td>
                <a href="/">Bfast4</a>          
              </td>
              <td>
                <a href="/">Bfast5</a>     
              </td>
              <td>
                <a href="/">Bfast6</a>
              </td>
              <td>
                <a href="/">Bfast7</a>          
              </td>
            </tr>
            <tr>
              <td className="meal-title">Lunch</td>
              <td>
                <a href="/">lunch1</a>       
              </td>
              <td>
                <a href="/">lunch2</a>  
              </td>
              <td>
                <a href="/">lunch3</a>  
              </td>
              <td>
                <a href="/">lunch4</a>
              </td>
              <td>
                <a href="/">lunch5</a>
              </td>
              <td>
                <a href="/">lunch6</a>
              </td>
              <td>
                <a href="/">lunch7</a>
              </td>
            </tr>
            <tr>
              <td className="meal-title">Dinner</td>
              <td>
                <a href="/">dinner1</a>
              </td>          
              <td>
                <a href="/">dinner2</a> 
              </td>
              <td>
                <a href="/">dinner3</a>
              </td>
              <td>
                <a href="/">dinner4</a>
              </td>
              <td>
                <a href="/">dinner5</a>
              </td>
              <td>
                <a href="/">dinner6</a> 
              </td>
              <td>
                <a href="/">dinner7</a>
              </td>
            </tr>
          </table>
      </section>
    </>
  );

}