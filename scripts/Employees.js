import { getEmployees, getOrders } from "./database.js"
const orders = getOrders()
const employees = getEmployees()
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("employee")) {
//             const [, employeeId] = itemClicked.id.split("--")
//             let count = 0
//             for (const employee of employees) {
//                 if (employee.id === parseInt(employeeId)) {
                    
//                     const employeeOrders = orders.filter((order) => {
//                             if (order.employeeId === employee.id) {
//                                 count++
//                                 return true
//                             }
//                         }
//                     )

//                     window.alert(` ${employee.name} sold ${count} products `)
//                 }
//             }
//         }
//     }
// )
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const employeeOrders = orders.filter((order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

