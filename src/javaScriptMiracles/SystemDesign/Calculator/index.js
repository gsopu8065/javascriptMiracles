const $ = (selector, startNode) => (startNode || document).querySelector(selector);
const $$ = (selector, startNode) => Array.from((startNode || document).querySelectorAll(selector));

class Model {
    get num1() {
        return this._num1;
    }
    set num1(num) {
        this._num1 = num;
        this.updateDisplayedText();
    }
    get num2() {
        return this._num2;
    }
    set num2(num) {
        this._num2 = num;
        this.updateDisplayedText();
    }
    updateDisplayedText() {
        console.log(
            this._num1,
            this._num2,
            this._num2 === "" ? this._num1 : this._num2
        );
        $(".display-text").textContent =
            this._num2 === "" ? this._num1 : this._num2;
    }
    operator = "";
    constructor() {
        this.num1 = "0";
        this.num2 = "";
    }
    appendDigit(digit) {
        digit += "";
        console.log(this.operator);
        if (this.operator) {
            this.num2 += digit;
        } else {
            if (this.num1 === "0") {
                this.num1 = digit;
            } else {
                this.num1 += digit;
            }
        }
    }
    clearAll() {
        this.num1 = "0";
        this.num2 = "";
        this.operator = "";
    }
    addDecimalPoint() {
        if (this.num2) {
            if (!this.num2.includes(".")) {
                this.num2 += ".";
            }
        } else {
            if (!this.num1.includes(".")) {
                this.num1 += ".";
            }
        }
    }
    toggleSign() {
        if (this.num1 === "0") {
            return;
        }
        if (this.num1.startsWith("-")) {
            this.num1 = this.num1.slice(1);
        } else {
            this.num1 = "-" + this.num1;
        }
    }
    applyPercent() {
        this.num1 = this.num1 / 100 + "";
    }
    updateOperator(operator) {
        if (this.operator === "") {
            this.operator = operator;
        } else if (this.num2) {
            this.equal();
            this.operator = operator;
        } else {
            this.operator = operator;
        }
    }

    equal() {
        switch (this.operator) {
            case "plus":
                this.num1 = 1 * this.num1 + 1 * this.num2 + "";
                break;
            case "minus":
                this.num1 = 1 * this.num1 - 1 * this.num2 + "";
                break;
            case "times":
                this.num1 = 1 * this.num1 * 1 * this.num2 + "";
                break;
            case "divide":
                this.num1 = ((1 * this.num1) / 1) * this.num2 + "";
                break;
            case "equal":
                if (this.num2) {
                    this.num1 = this.num2;
                }
                break;
        }
        this.operator = "equal";
        this.num2 = "";
    }
}
const model = new Model();

[
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
].forEach((name, index) => {
    $(`.number-${name}`).addEventListener("click", (e) => {
        model.appendDigit(index);
    });
});

$(`.operator-all-clear`).addEventListener("click", (e) => {
    model.clearAll();
});

$(`.operator-decimal-point`).addEventListener("click", (e) => {
    model.addDecimalPoint();
});

$(`.operator-plus-minus`).addEventListener("click", (e) => {
    model.toggleSign();
});
$(".operator-percent").addEventListener("click", (e) => {
    model.applyPercent();
});
["plus", "minus", "times", "divide"].forEach((op) => {
    $(`.operator-${op}`).addEventListener("click", (e) => {
        model.updateOperator(op);
    });
});
$(".operator-equal").addEventListener("click", (e) => {
    model.equal();
});
