class numericCalculator {
    constructor(data) {
        this._name = data.name; // name of the calculator
        this._description = data.description;
        this._requiredVariableCount = data.requiredVariableCount; // how many variables are needed to be know to solve() the other values
        this._variables = new Map(Object.entries(data.variables)); // the variables available to this calculator
        this._userInputVariables = new Set(); // reference to the last known variables entered by the user
    }
    // ** SETTERS AND GETTERS **
    // SET the number of required user input variables for the solve() to work
    set requiredVariableCount(count) {
        this._requiredVariableCount = count;
    }
    // SET the variables for this calculator
    set variables(InitialVariablesObj) {
        this._variables = new Map(Object.entries(InitialVariablesObj));
    }
    // GET the name of this calculator
    get name() {
        return this._name;
    }
    // GET the required number of variables needed to solve() the other variables
    get requiredVariableCount() {
        return this._requiredVariableCount;
    }
    // GET the variables for this calculator
    get variables() {
        return this._variables;
    }
    // GET the list of user inputed variables
    get userInputVariables() {
        return this._userInputVariables;
    }
    get description() {
        return this._description;
    }
    // SET the list of user inputed variables
    set userInputVariables(id) {
        // const InputKey = Object.keys(variableObj)[0];
        this._userInputVariables.add(id);
        console.log(
            "3. Added '",
            id,
            "' to the userInputedVariables",
            this._userInputVariables
        );
    }
    // ** METHODS **
    // When the user enters a value into the calculator.
    userInput(id, value) {
        // 1.
        console.log('1. User inputed: ', id, value);
        // destructure the incoming object into its key and variable value
        // const [InputKey, inputValue] = Object.entries(variableObj)[0];
        // VALIDATE THE INPUT
        // Check the passed {variable} pairs are of the corerct type
        if (!this._variables.has(id)) {
            throw new Error(
                'Invalid input: variables key does not exist, needs to be either ',
                ...this._variables.keys()
            );
        }
        // if (typeof value !== 'number') {
        //     throw new Error(
        //         "Invalid input: value property must be type 'number'"
        //     );
        // }

        console.log(`1a. Validated user input, now passing data to functions`);
        // 2. update the variables map item with the new user inputed value
        this.updateVariableValue(id, value);
        // 3. update the lastknowVariables with the user inputed variable
        this.userInputVariables = id;
        // 4. if enough variables have been collected calculate the others
        if (this._userInputVariables.size >= this._requiredVariableCount) {
            this.calculate();
        }
        console.log('');
    }
    // update the variables map item with the new user inputed value
    updateVariableValue(id, value) {
        this._variables.get(id).value = value;
        console.log(
            '2. Updated variable ',
            id,
            ' value:',
            this._variables.get(id).value
        );
        console.log(this._variables);
    }
    // Find the Solve() method of each unkown variable calculate the unkown variable
    calculate() {
        for (const [variableKey, variableObj] of this._variables) {
            if (!this._userInputVariables.has(variableKey)) {
                // solve the value by using the Solve method in each unknown variable
                // console.log("5a. Solving: ", variableKey);
                variableObj.solve(this._variables);
                console.log(
                    '5b. Solved:',
                    variableKey,
                    this._variables.get(variableKey).value
                );
            }
        }
    }
    clear() {
        // clear the value property of each Variable in the _variables map()
        this._variables.forEach((variable) => {
            variable.value = '';
        });
        // clear the userInputVariables array
        this._userInputVariables.clear();
    }
}
export default numericCalculator;
