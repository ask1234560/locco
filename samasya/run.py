from flask import Flask,render_template,request


app=Flask(__name__)      
   
@app.route('/')     
def index():    
    return render_template('index.html')   
   
  

@app.route('/auth',methods=['POST'])
def auth(): 
 
 
 if request.method == 'POST': 
   question=str(request.form["question"])
   answer=int(request.form["answer"])
   keys={'1': 4, '2': 2, '3': 1, '4': 3, '5':4, '6':1, '7':3, '8':2, '9':2, '10':3}
   if(keys[question]==answer):
    return '{"status":200}' 
   else:
    return '{"status":201}' 


if __name__ == '__main__' :
 app.run(debug=True)

