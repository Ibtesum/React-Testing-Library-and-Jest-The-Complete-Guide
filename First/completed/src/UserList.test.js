import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test('render one row per user', ()=> {
    // Render the component
    const users = [
        {name: 'jane', email: 'jane@jane.com'},
        {name: 'sam', email: 'sam@sam.com'}
    ]
    render(<UserList users={users} />)

    // Find all the rows in the table
    
    const rows =within(screen.getByTestId('users')).getAllByRole('row') 
    
    // const table = container.querySelector('table')
    // console.log(table)

    // eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr')


    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2)
})