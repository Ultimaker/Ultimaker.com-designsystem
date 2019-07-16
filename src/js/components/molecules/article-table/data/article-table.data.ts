/** @format */

export const data = {
    'with header': {
        type: 'ArticleTable',
        table: `
            <table>
                <thead>
                    <tr>
                        <th>header 1</th><th>header 2</th><th>header 3</th><th>header 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>row 1:1</td><td>row 1:2</td> <td>row 1:3</td><td>row 1:4</td>
                    </tr>
                    <tr>
                        <td>row 2:1</td><td>row 2:2</td> <td>row 2:3</td><td>row 2:4</td>
                    </tr>
                    <tr>
                        <td>row 3:1</td><td>row 3:2</td> <td>row 3:3</td><td>row 3:4</td>
                    </tr>
                    <tr>
                        <td>row 4:1</td><td>row 4:2</td> <td>row 4:3</td><td>row 4:4</td>
                    </tr>
                </tbody>
            </table>
        `,
    },
    'without header': {
        type: 'ArticleTable',
        table: `
            <table>
                <tbody>
                    <tr>
                        <td>row 1:1</td><td>row 1:2</td> <td>row 1:3</td><td>row 1:4</td>
                    </tr>
                    <tr>
                        <td>row 2:1</td><td>row 2:2</td> <td>row 2:3</td><td>row 2:4</td>
                    </tr>
                    <tr>
                        <td>row 3:1</td><td>row 3:2</td> <td>row 3:3</td><td>row 3:4</td>
                    </tr>
                    <tr>
                        <td>row 4:1</td><td>row 4:2</td> <td>row 4:3</td><td>row 4:4</td>
                    </tr>
                </tbody>
            </table>
        `,
    },
};
