package main

import (
"encoding/json"
"fmt"
"io/ioutil"
)

func main() {
read, _ := ioutil.ReadFile("system.json")
var data map[string]interface{}
_ = json.Unmarshal(read, &data)
fmt.Println(data["id"])
fmt.Println(data)
}