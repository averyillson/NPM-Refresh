const cp = require("child_process")

const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("Avery \n")
questionApp.stdin.write("Orlando \n")
questionApp.stdin.write("Change the world \n")

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log(`questionApp process excited`)
})