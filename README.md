# Learning JavaScript, 3rd Edition    

## Overview  
This repository serves to hosting source codes for examples in book [Learning JavaScript, 3rd Edition](https://www.amazon.cn/JavaScript%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97-%E7%AC%AC3%E7%89%88-%E7%BE%8E-Ethan-Brown-%E5%B8%83%E6%9C%97/dp/B073L8PGSD/ref=sr_1_1?s=books&ie=UTF8&qid=1510117364&sr=1-1&keywords=Learning+JavaScript%2C+3rd+Edition&dpID=51uMzRdcOHL&preST=_SX258_BO1,204,203,200_QL70_&dpSrc=srch)

## Contents  
+ [Foreword](#foreword)  
+ [Chapter 01: Your First Application](chapter01-your-first-app/README.md)    
+ [Chapter 02: JavaScript Development Tools](chapter02-dev-tools/README.md)    
+ [Chapter 03: Literals, Variables, Constants, and Data Types](chapter03/README.md)    
+ [Chapter04. Control Flow](chapter04/README.md)    
+ [Chapter05. Expressions and Operators](chapter05/README.md)  
+ [Chapter06. Functions](chapter06-functions/README.md)  
+ [Chapter07. Scope](chapter07-scope/README.md)  
+ [Chapter08. Arrays and Array Processing](chapter08-arr-process/README.md)  
+ [Chapter09. Objects and Object-Oriented Programming](chapter09-oop/README.md)  
+ [Chapter10. Maps and Sets](chapter11-map-set/README.md)  
+ [Chapter11. Exceptions and Error Handling](chapter11-exception-err/README.md)  
+ [Chapter12. Iterator and Generator](chapter10-itr-gen/README.md)  
+ [Chapter13. Functions and the Power of Abstract Thinking](chapter13-functional-thinking/README.md)  
+ [Chapter 14. Asynchronous Programming](chapter14-async-programming/README.md)  
+ [Chapter15. Date and Time](chapter15-date-time/README.md)   
+ [Chapter16. Math](chapter16-math/README.md)  
+ [Chapter17. Regular Expressions](chapter17-regex/README.md)  
+ [Chapter18. JavaScript in the Browser](chapter18-js-in-browser/README.md)  
+ [Chapter19. jQuery](chapter19-jquery/README.md)  
+ [Chapter20. Node](chapter20-node/README.md)  
+ [Chapter21. Object Property Configuration and Proxies](chapter21-obj-prop-config-and-proxy/README.md)  

<a name="foreword"></a>
## Foreword  
For convenince, I have configure an runnable nodejs container as `Dockerfile` for those faimilar with docker. **This is an optional configuration to run the codes in the book!**.

### Set up the Node container [Optional]  
1. Install `docker`   
2. Download the `Dockerfile` and `bootstrap.sh` in the repository in some directory, says `~/hello` you like   
3. Build the container by running in the `~/hello`      
```base
docker build -t node:lj .
```  
4. Add the executable permission to script `bootstrap.sh` if necessary   
5. Run   
```
./bootstrap
```  
After all above, you should get in a Node image tagged as `nodejs:9.1` installed, and as specified in `bootstrap.sh`   
+ your current working directory in the host machine will be mounted to the `/home/node/app` directory (set by flag `-v`) in the container. 
+ port 3000 in host will mapped port 3000 in container  
+ you will run as a user named `node` in the container with your working directory being `/home/node/app`  
+ the container will be removed once exit  
Go ahead and play with it~  


## Progress  
+ [x] Chapter01. Your First Application  
+ [x] Chapter02. JavaScript Development Tools  
+ [x] Chapter03. Literals, Variables, Constants, and Data Types  
+ [ ] Chapter04. Control Flow  
+ [ ] Chapter05. Expressions and Operators  
+ [x] Chapter06. Functions  
+ [x] Chapter07. Scope  
+ [x] Chapter08. Arrays and Array Processing  
+ [x] Chapter09. Objects and Object-Oriented Programming  
+ [x] Chapter10. Maps and Sets  
+ [x] Chapter11. Exceptions and Error Handling  
+ [x] Chapter12. Iterator and Generator  
+ [x] Chapter13. Functions and the Power of Abstract Thinking
+ [ ] Chapter14. Asynchronous Programming  
+ [x] Chapter15. Date and Time  
+ [x] Chapter16. Math  
+ [x] Chapter17. Regular Expressions  
+ [x] Chapter18. JavaScript in the Browser  
+ [x] Chapter19. jQuery  
+ [x] Chapter20. Node  
+ [x] Chapter21. Object Property Configuration and Proxies
