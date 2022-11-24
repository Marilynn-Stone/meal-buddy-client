import React from 'react';

const thumbnail = <img className="photo" src="https://iili.io/H2kPjtt.png" alt="thumbnail" />;

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
            <p>Bfast1</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast2</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast3</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast4</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast5</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast6</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
        <td className="meal-title">Snack</td>
          <td>
            <p>Snack1</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack2</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack3</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack4</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack5</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack6</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
          <td className="meal-title">Lunch</td>
          <td>
            <p>lunch1</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch2</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch3</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch4</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch5</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch6</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
          <td className="meal-title">Supper</td>
          <td>
            <p>supper1</p>
            {thumbnail}
          </td>          
          <td>
            <p>supper2</p>
            {thumbnail}
          </td>
          <td>
            <p>supper3</p>
            {thumbnail}
          </td>
          <td>
            <p>supper4</p>
            {thumbnail}
          </td>
          <td>
            <p>supper5</p>
            {thumbnail}
          </td>
          <td>
            <p>supper6</p>
            {thumbnail}
          </td>
          <td>
            <p>supper7</p>
            {thumbnail}
          </td>
        </tr>
      </table>
      </section>
    </>
  );

}