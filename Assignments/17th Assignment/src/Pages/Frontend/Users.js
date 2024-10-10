import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export default function Users() {

    const [isAuth, setIsAuth, users, setUsers] = useAuthContext()

    // -------------- Styling -------------------

    const tableStyle = {
        "width": "90%",
        "margin": "auto"
    }

    const borderStyle = {
        "border": "1px solid #b7b7b7",
        "padding": "15px 0px",
        "height": "173.92px",
        "alignItems": "center"
    }

    const btnStyle = {
        "display": "flex",
        "justifyContent": "space-evenly"
    }


    const rowStyle = {
        "textAlign": "center"
    }

    return (
        <main>
            <h1 className="text-center my-5 fw-bold">
                Registered Users
            </h1>
            {
                users.length == 0
                    ?
                    <h1 className='my-5 text-center fw-medium'>
                        No Registered user
                    </h1>
                    :
                    <>
                        <Table style={tableStyle} className='my-5'>
                            <Thead>
                                <Tr style={rowStyle}>
                                    <Th style={borderStyle}>User #</Th>
                                    <Th style={borderStyle}>First Name</Th>
                                    <Th style={borderStyle}>First Name</Th>
                                    <Th style={borderStyle}>Email</Th>
                                    <Th style={borderStyle}>Password</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <>
                                    {
                                        users.map((user, index) => {
                                            return (
                                                <Tr key={index} className='my-3' style={rowStyle}>
                                                    <Td style={borderStyle}>{index + 1}</Td>
                                                    <Td style={borderStyle}>{user.firstName}</Td>
                                                    <Td style={borderStyle}>{user.lastName}</Td>
                                                    <Td style={borderStyle}>{user.email}</Td>
                                                    <Td style={borderStyle}>{user.password}</Td>
                                                </Tr>
                                            )
                                        })
                                    }
                                </>
                            </Tbody>
                        </Table>
                    </>
            }
        </main>
    )
}
