Search.setIndex({docnames:["API/0_Marabou","API/1_MarabouNetwork","API/2_MarabouNetworkNNet","API/3_MarabouNetworkTF","API/4_MarabouNetworkONNX","API/5_MarabouUtils","API/6_MarabouCore","Develop/0_Guide","Develop/1_PullRequests","Develop/2_CodingStyle","Develop/3_Tests","Develop/4_Examples","Develop/5_Documentation","Examples/0_NNetExample","Examples/1_TensorflowExample","Examples/2_ONNXExample","Examples/3_MarabouCoreExample","Examples/4_DncExample","Examples/5_DisjunctionConstraintExample","Examples/index","Setup/0_Installation","Setup/1_Testing","Setup/2_Troubleshooting","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["API/0_Marabou.rst","API/1_MarabouNetwork.rst","API/2_MarabouNetworkNNet.rst","API/3_MarabouNetworkTF.rst","API/4_MarabouNetworkONNX.rst","API/5_MarabouUtils.rst","API/6_MarabouCore.rst","Develop/0_Guide.md","Develop/1_PullRequests.md","Develop/2_CodingStyle.md","Develop/3_Tests.md","Develop/4_Examples.md","Develop/5_Documentation.md","Examples/0_NNetExample.rst","Examples/1_TensorflowExample.rst","Examples/2_ONNXExample.rst","Examples/3_MarabouCoreExample.rst","Examples/4_DncExample.rst","Examples/5_DisjunctionConstraintExample.rst","Examples/index.rst","Setup/0_Installation.md","Setup/1_Testing.md","Setup/2_Troubleshooting.md","index.rst"],objects:{"maraboupy.Marabou":{createOptions:[0,1,1,""],load_query:[0,1,1,""],read_nnet:[0,1,1,""],read_onnx:[0,1,1,""],read_tf:[0,1,1,""],solve_query:[0,1,1,""]},"maraboupy.MarabouCore":{Equation:[6,2,1,""],InputQuery:[6,2,1,""],Options:[6,2,1,""],PiecewiseLinearFunctionType:[6,2,1,""],Statistics:[6,2,1,""],addAbsConstraint:[6,1,1,""],addDisjunctionConstraint:[6,1,1,""],addMaxConstraint:[6,1,1,""],addReluConstraint:[6,1,1,""],addSignConstraint:[6,1,1,""],createInputQuery:[6,1,1,""],loadQuery:[6,1,1,""],saveQuery:[6,1,1,""],solve:[6,1,1,""]},"maraboupy.MarabouCore.Equation":{EquationType:[6,2,1,""],addAddend:[6,3,1,""],setScalar:[6,3,1,""]},"maraboupy.MarabouCore.Equation.EquationType":{name:[6,3,1,""]},"maraboupy.MarabouCore.InputQuery":{addEquation:[6,3,1,""],dump:[6,3,1,""],getLowerBound:[6,3,1,""],getNumInputVariables:[6,3,1,""],getNumOutputVariables:[6,3,1,""],getNumberOfVariables:[6,3,1,""],getSolutionValue:[6,3,1,""],getUpperBound:[6,3,1,""],inputVariableByIndex:[6,3,1,""],markInputVariable:[6,3,1,""],markOutputVariable:[6,3,1,""],outputVariableByIndex:[6,3,1,""],setLowerBound:[6,3,1,""],setNumberOfVariables:[6,3,1,""],setUpperBound:[6,3,1,""]},"maraboupy.MarabouCore.PiecewiseLinearFunctionType":{name:[6,3,1,""]},"maraboupy.MarabouCore.Statistics":{getMaxDegradation:[6,3,1,""],getMaxStackDepth:[6,3,1,""],getNumConstraintFixingSteps:[6,3,1,""],getNumMainLoopIterations:[6,3,1,""],getNumPops:[6,3,1,""],getNumPrecisionRestorations:[6,3,1,""],getNumSimplexPivotSelectionsIgnoredForStability:[6,3,1,""],getNumSimplexUnstablePivots:[6,3,1,""],getNumSplits:[6,3,1,""],getNumTableauPivots:[6,3,1,""],getNumVisitedTreeStates:[6,3,1,""],getTimeSimplexStepsMicro:[6,3,1,""],getTotalTime:[6,3,1,""],hasTimedOut:[6,3,1,""]},"maraboupy.MarabouNetwork":{MarabouNetwork:[1,2,1,""]},"maraboupy.MarabouNetwork.MarabouNetwork":{absList:[1,4,1,""],addAbsConstraint:[1,3,1,""],addDisjunctionConstraint:[1,3,1,""],addEquality:[1,3,1,""],addEquation:[1,3,1,""],addInequality:[1,3,1,""],addMaxConstraint:[1,3,1,""],addRelu:[1,3,1,""],addSignConstraint:[1,3,1,""],clear:[1,3,1,""],equList:[1,4,1,""],evaluate:[1,3,1,""],evaluateWithMarabou:[1,3,1,""],findError:[1,3,1,""],getMarabouQuery:[1,3,1,""],inputVars:[1,4,1,""],lowerBoundExists:[1,3,1,""],lowerBounds:[1,4,1,""],maxList:[1,4,1,""],numVars:[1,4,1,""],outputVars:[1,4,1,""],reluList:[1,4,1,""],saveQuery:[1,3,1,""],setLowerBound:[1,3,1,""],setUpperBound:[1,3,1,""],signList:[1,4,1,""],solve:[1,3,1,""],upperBoundExists:[1,3,1,""],upperBounds:[1,4,1,""]},"maraboupy.MarabouNetworkNNet":{MarabouNetworkNNet:[2,2,1,""]},"maraboupy.MarabouNetworkNNet.MarabouNetworkNNet":{addAbsConstraint:[2,3,1,""],addDisjunctionConstraint:[2,3,1,""],addEquality:[2,3,1,""],addEquation:[2,3,1,""],addInequality:[2,3,1,""],addMaxConstraint:[2,3,1,""],addRelu:[2,3,1,""],addSignConstraint:[2,3,1,""],b_variables:[2,4,1,""],biases:[2,4,1,""],clear:[2,3,1,""],clearNetwork:[2,3,1,""],createRandomInputsForNetwork:[2,3,1,""],evaluate:[2,3,1,""],evaluateNNet:[2,3,1,""],evaluateWithMarabou:[2,3,1,""],evaluateWithoutMarabou:[2,3,1,""],f_variables:[2,4,1,""],findError:[2,3,1,""],getBoundsForLayer:[2,3,1,""],getInputMaximum:[2,3,1,""],getInputMinimum:[2,3,1,""],getLowerBound:[2,3,1,""],getLowerBoundsForLayer:[2,3,1,""],getMarabouQuery:[2,3,1,""],getUpperBound:[2,3,1,""],getUpperBoundsForLayer:[2,3,1,""],getVariable:[2,3,1,""],inputMaximums:[2,4,1,""],inputMeans:[2,4,1,""],inputMinimums:[2,4,1,""],inputRanges:[2,4,1,""],inputSize:[2,4,1,""],layerSizes:[2,4,1,""],lowerBoundExists:[2,3,1,""],maxLayersize:[2,4,1,""],numLayers:[2,4,1,""],numberOfVariables:[2,3,1,""],outputMean:[2,4,1,""],outputRange:[2,4,1,""],outputSize:[2,4,1,""],resetNetworkFromParameters:[2,3,1,""],saveQuery:[2,3,1,""],setLowerBound:[2,3,1,""],setUpperBound:[2,3,1,""],solve:[2,3,1,""],upperBoundExists:[2,3,1,""],weights:[2,4,1,""],writeNNet:[2,3,1,""]},"maraboupy.MarabouNetworkONNX":{MarabouNetworkONNX:[4,2,1,""]},"maraboupy.MarabouNetworkONNX.MarabouNetworkONNX":{addAbsConstraint:[4,3,1,""],addDisjunctionConstraint:[4,3,1,""],addEquality:[4,3,1,""],addEquation:[4,3,1,""],addInequality:[4,3,1,""],addMaxConstraint:[4,3,1,""],addRelu:[4,3,1,""],addSignConstraint:[4,3,1,""],clear:[4,3,1,""],evaluate:[4,3,1,""],evaluateWithMarabou:[4,3,1,""],evaluateWithoutMarabou:[4,3,1,""],findError:[4,3,1,""],getMarabouQuery:[4,3,1,""],lowerBoundExists:[4,3,1,""],saveQuery:[4,3,1,""],setLowerBound:[4,3,1,""],setUpperBound:[4,3,1,""],solve:[4,3,1,""],upperBoundExists:[4,3,1,""]},"maraboupy.MarabouNetworkTF":{MarabouNetworkTF:[3,2,1,""]},"maraboupy.MarabouNetworkTF.MarabouNetworkTF":{addAbsConstraint:[3,3,1,""],addDisjunctionConstraint:[3,3,1,""],addEquality:[3,3,1,""],addEquation:[3,3,1,""],addInequality:[3,3,1,""],addMaxConstraint:[3,3,1,""],addRelu:[3,3,1,""],addSignConstraint:[3,3,1,""],clear:[3,3,1,""],evaluate:[3,3,1,""],evaluateWithMarabou:[3,3,1,""],evaluateWithoutMarabou:[3,3,1,""],findError:[3,3,1,""],getMarabouQuery:[3,3,1,""],lowerBoundExists:[3,3,1,""],readTF:[3,3,1,""],saveQuery:[3,3,1,""],setLowerBound:[3,3,1,""],setUpperBound:[3,3,1,""],solve:[3,3,1,""],upperBoundExists:[3,3,1,""]},"maraboupy.MarabouUtils":{Equation:[5,2,1,""]},"maraboupy.MarabouUtils.Equation":{EquationType:[5,4,1,""],addAddend:[5,3,1,""],addendList:[5,4,1,""],scalar:[5,4,1,""],setScalar:[5,3,1,""]},maraboupy:{Marabou:[0,0,0,"-"],MarabouCore:[6,0,0,"-"],MarabouNetwork:[1,0,0,"-"],MarabouNetworkNNet:[2,0,0,"-"],MarabouNetworkONNX:[4,0,0,"-"],MarabouNetworkTF:[3,0,0,"-"],MarabouUtils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0_nnetexampl":13,"1_tensorflowexampl":14,"2_onnxexampl":15,"3_maraboucoreexampl":16,"4_dncexampl":17,"5_disjunctionconstraintexampl":18,"64bit":22,"8x16":15,"abstract":1,"break":8,"case":[8,9,21],"class":[1,2,3,4,5,6],"default":[0,1,2,3,4,6,9,14,15,20,22],"export":[13,18],"float":[0,1,2,3,4,5,6],"function":[0,1,2,3,4,9,10,11,21],"import":[9,10,11,13,14,15,16,17,18,22],"int":[0,1,2,3,4,5,6],"new":[1,2,3,4,8,9,10,11,12,19,21],"return":[0,1,2,3,4,6,9,13,16,17,23],"true":[0,1,2,3,4,17],"try":[4,10],"var":[1,2,3,4,16,18],"while":[8,9,22],Abs:[1,2,3,4,6],Adding:19,For:[9,10,20],RHS:5,The:[0,2,3,7,9,10,11,12,14,15,16,19,20,21,22],Then:10,There:9,These:[19,21],Use:9,__file__:10,about:[7,9,10,19],abov:9,abs:[1,13,14,15,18],abslist:1,absolutevalu:6,acas_exampl:[13,17],acasxu_run2a_1_1_tiny_2:[13,17],access:[7,8,21],accomod:21,activ:2,activate_output_lay:2,add:[1,2,3,4,5,6,8,9,10,12,16,18,20,21],addabsconstraint:[1,2,3,4,6],addaddend:[5,6,16,18],adddisjunctionconstraint:[1,2,3,4,6,18],added:[10,19,20,21,23],addend:5,addendlist:5,addequ:[1,2,3,4,6,16],addinequ:[1,2,3,4],adding:[10,11,12,21],addit:[7,12,18,20],addmaxconstraint:[1,2,3,4,6],addrelu:[1,2,3,4],addreluconstraint:[6,16],addsignconstraint:[1,2,3,4,6],adjust:2,affili:[0,1,2,3,4,5,9,13,14,15,16,17,18],after:[0,1,2,3,4,7,8,9,11,19,20,21],against:15,alex:2,all:[0,1,2,3,4,5,7,8,9,12,13,14,15,16,17,18,19,21,23],allow:[9,10,11,12,21],alongsid:[20,21],alreadi:2,also:[0,3,9,10,11,20,21],altern:[11,19],alwai:[2,8],andrew:[0,1,2,16,17,18],ani:[10,22],anyth:9,api:[9,10,20,21,23],appear:[9,11,12],append:[13,17,18,19],appropri:10,approv:8,approxim:[14,15],arg0:6,arg1:[6,9],arg2:[6,9],arg:9,argument:[2,9,10],arrai:[1,2,3,4,13],assert:[10,13,15,17,18],assign:[18,23],attempt:21,attr1:9,attr2:9,attribut:[2,9],author:[0,1,2,3,4,5,8,9,13,14,15,16,17,18],auto:0,automat:[8,9,11,19,20],avail:[20,21],b_variabl:2,backward:1,base:[1,2,3,4,5,6,23],basic:[2,10,19],batch:[14,15],becaus:10,been:[9,10,19,20,21],befor:[0,8,11,21],begin:[9,10,11,19],behav:10,being:11,below:9,benefit:8,best:7,between:[1,2,3,4,9,21],bia:2,bias:2,big:8,binari:20,bind:6,bit:20,block:[9,11,19],bold:11,bool:[0,1,2,3,4,6],boost:20,both:[14,20,21],bottom:11,bound:[1,2,3,4,6,13,14,15,16,18],branch:[8,11],brief:9,briefli:9,build:[7,9,11,21,22],built:[9,19,20,21,22],call:[14,15],camelcas:9,can:[0,3,7,8,9,10,11,12,14,15,19,20,21,22,23],cannot:[1,2,3,4],capit:9,caption:12,caught:10,caus:22,cav:16,chanc:9,chang:[7,8,10,20],charact:19,check:[1,2,3,4,9,11,15,20],chelsea:3,choos:[14,15],chosen:2,christoph:[0,1,2,3,5,13,14,16],chunk:8,clang:22,clear:[1,2,3,4],clearnetwork:2,click:[13,14,15,16,17,18],clone:20,cmake:[20,22],cmakelist:21,code:[5,10,11,13,14,15,16,17,18,19,21,23],coeff:[1,2,3,4],coeffici:[1,2,3,4,5],coeffs_i:[1,2,3,4],collect:19,colon:9,com:20,combin:10,command:[20,21,22],comment:[7,8,9,11,19],commit:8,common:22,compil:[20,22],compon:21,comput:[1,2,3,4],conatin:1,concis:9,config:20,configur:22,consequ:22,consid:2,consist:9,constant:[1,2,3,4],constraint:[1,2,3,4,6,13,15,16,17,19,21,23],construct:[0,3,4],contain:[0,1,2,3,4,5,6,7,8,9,10,11,19],contribut:23,contributer1:9,contributer2:9,contributor:[0,1,2,3,4,5,7,9,13,14,15,16,17,18],control:20,conv_mp1:15,conveni:5,convert:[1,2,3,4],copi:[0,1,2,3,4,5,9,13,14,15,16,17,18,20],copyright:[0,1,2,3,4,5,9,13,14,15,16,17,18],correct:[9,11,19],correctli:[9,10,11,21],correspond:[0,2,3,4],could:11,cover:10,creat:[0,2,3,6,7,8,9,10,11,12,14,15,19,20,21,22],createinputqueri:6,createopt:[0,15,16,17],createrandominputsfornetwork:2,ctest:21,current:[0,1,2,3,4,5,8,9,11,13,14,15,16,17,18],cygwin:22,data:2,date:8,dbuild_python:[20,22],dcmake_build_typ:20,debug:[8,20],decdi:21,deep:12,defin:[0,1,6,9,10,21],delta:15,demonstr:11,denot:19,depend:20,deploi:11,deriv:[2,3,4,19],describ:[7,21],descript:[6,9,21],descripton:9,desir:23,desktop:20,determin:12,develop:[7,8,9,20,23],dict:[0,1,2,3,4,6],dictionari:[0,1,2,3,4,6],did:[13,18],differ:[9,11,22],dimens:[14,15],direct:6,directli:[2,7,11,21],directori:[0,1,2,3,4,5,9,10,12,13,14,15,16,17,18,19,20,21,22],dirnam:10,disabl:8,discourag:8,disjunct:[1,2,3,4,6,19,23],displai:[11,12],divid:[0,21],dnc:[0,19,23],doc:[9,11,12,19],docst:9,docstr:10,document:[7,8,9,10,11,19,23],doe:9,doesn:5,done:[8,12],doubt:9,down:8,download:[11,13,14,15,16,17,18,19,20],dpython_execut:22,dump:6,durat:0,dure:20,each:[1,2,3,4,5,6,8,9,10,21],earliest:0,easier:9,edit:12,either:[0,3,8,18,20,23],element:[1,2,3,4,6],els:16,empti:[0,1,2,3,4,6,9],enabl:20,encod:[0,23],encount:22,encourag:8,end:[9,11,21],engin:21,ensur:[9,10,11,20,21],environment:20,eq1:18,eq2:18,equal:[1,2,3,4,6,11],equat:[1,2,3,4,5,6,9,15,16,18,23],equation1:16,equation2:16,equation3:16,equationtyp:[5,6],equlist:1,error:[1,2,3,4,9,10,22],etc:11,eval:[13,18],evalu:[1,2,3,4,13,15],evaluatennet:2,evaluatewithmarab:[1,2,3,4,13,15],evaluatewithoutmarab:[2,3,4,15],everyon:8,everyth:[8,21],exampl:[9,19,21,23],examples_jupyt:19,examples_python:19,except:[7,9],execut:[11,20],exist:[9,10,12,19,23],expect:[7,8,21],explain:[9,10,23],extens:[9,21],f_variabl:2,factor:0,fail:21,failur:21,fals:[0,2],fc1:[14,15],featur:8,few:9,file:[0,1,2,3,4,5,6,11,12,13,14,15,16,17,18,19,20,21,22],file_nam:2,filenam:[0,1,2,3,4,6,10,14,15,21],filepath:6,fill:12,find:[1,2,3,4,10],finderror:[1,2,3,4],finish:[0,1,2,3,4,8],first:[0,13,14,15,18,20],first_lay:2,fit:5,fix:[8,13],flatten:13,focus:9,folder:[10,11,12,13,18,19,20,21],follow:[9,10,11,12,19],forc:22,fork:[7,8],form:9,format:[0,2,3,4,9,10,11,12,21,23],forward:1,found:[7,9,10,11,13,18,22],from:[0,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,20,21,22],frozen:[0,3],frozen_graph:14,full:[13,14,15,16,17,18],futur:[9,11,21],galleri:[11,13,14,15,16,17,18,19],gcc:22,gener:[1,7,8,9,10,11,13,14,15,16,17,18,19,20,23],get:[2,8,14,15,20],getboundsforlay:2,getinputmaximum:2,getinputminimum:2,getinputqueri:0,getlowerbound:[2,6],getlowerboundsforlay:2,getmarabouqueri:[1,2,3,4],getmaxdegrad:6,getmaxstackdepth:6,getnumberofvari:6,getnumconstraintfixingstep:6,getnuminputvari:6,getnummainloopiter:6,getnumoutputvari:6,getnumpop:6,getnumprecisionrestor:6,getnumsimplexpivotselectionsignoredforst:6,getnumsimplexunstablepivot:6,getnumsplit:[6,13,18],getnumtableaupivot:6,getnumvisitedtreest:6,getsolutionvalu:6,gettimesimplexstepsmicro:6,gettotaltim:[6,13,18],getupperbound:[2,6],getupperboundsforlay:2,getvari:2,git:[8,13,18,20],github:[8,20],give:[9,19],given:[0,1,2,3,4,6,21],glob:12,going:11,good:11,googl:[9,10],graph:[0,3],grayscal:15,greater:21,guid:[9,23],guidelin:[7,23],gurobi:0,hand:[1,2,3,4],handl:[6,10],haoz:18,has:[8,10,11,14,15,19,20,21],hastimedout:6,have:[8,9,10,19,20,21,22],header:11,help:[11,21],helper:10,here:[7,9,11,13,14,15,16,17,18,20,22],highli:8,histori:8,home:[13,18],how:[0,1,2,3,4,6,10,12,19,22,23],howev:[11,20],html:[9,11,12],http:20,idea:11,ideal:10,identifi:21,imag:15,immedi:9,implement:23,improv:[9,12],includ:[9,19,21],incorpor:[0,2,11],index:[2,12],indic:[11,12,19],individu:21,inequ:[1,2,3,4],inform:[0,1,2,3,4,5,7,9,10,11,13,14,15,16,17,18,19],inherit:2,init:9,initi:[0,2,9],initialdivid:[0,17],initialtimeout:0,inner:[1,2,3,4],input:[0,1,2,3,4,6,13,14,15,18,21],input_pars:[13,17],input_var:2,inputmaximum:2,inputmean:2,inputminimum:2,inputnam:[0,3,4,14,15],inputpoint:15,inputqueri:[0,1,2,3,4,6,16],inputrang:2,inputs:2,inputvalu:[1,2,3,4],inputvar:[1,14,15,18],inputvariablebyindex:6,instal:[0,21,22,23],instead:[9,21,22],institut:[0,1,2,3,4,5,9,13,14,15,16,17,18],instruct:[9,11],integ:21,interest:8,interfac:[0,8,20,22,23],intermedi:8,intern:21,interv:0,investig:22,ipq:0,ipynb:[13,14,15,16,17,18],issu:[21,22],its:22,join:10,julian:[0,1,2,3,4,5,13,14,15,16,17],jupyt:[13,14,15,16,17,18,19],just:9,kei:0,kj_tinytaxinet:15,known:[1,2,3,4],kyle:[0,1,2,3,4,5,13,14,15,16,17],larg:16,largest:[0,2],last:[0,2,14,15,20],last_lay:2,later:20,layer:[0,2],layers:2,lazaru:[0,1,2,3,5,13,14,16],least:[8,21,22],len:[15,16,17],less:[8,15],letter:9,level:[0,1,2,3,4,5,9,12,13,14,15,16,17,18,21],leverag:11,librari:[20,21],licens:[0,1,2,3,4,5,9,13,14,15,16,17,18],like:[9,20,22],line:[9,11,19,22],linear:[1,2,3,4,8,23],link:[9,11],linux:22,list:[0,1,2,3,4,5,6,9,13,14,15,16,17,18],live:[10,11],load:[0,3,6,13,17,18],load_queri:0,loadqueri:6,local:[11,15],locat:[9,10,20,21],log:[1,2,3,4,14],longer:9,look:[9,11,19,22],lower:[1,2,3,4,9,13,16,18],lowerbound:1,lowerboundexist:[1,2,3,4],machin:20,made:8,mai:[7,21,22],main:[0,8,10],major:8,make:[0,8,9,10,11,19,21,22],mani:12,map:15,marab:[1,2,3,4,5,6,8,9,10,13,14,15,16,17,18,19,22,23],marabopi:9,maraboucor:[18,19,20,21,23],marabouev:15,marabouin:0,marabounetwork:[2,3,4,23],marabounetworknnet:[0,23],marabounetworkonnx:[0,23],marabounetworktf:[0,23],marabouopt:6,maraboupi:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,22],maraboupoi:21,marabouutil:[9,23],markdown:12,markinputvari:6,markoutputvari:6,master:[7,8,11],match:9,matric:2,max:[1,2,3,4,6,13],maxdepth:12,maxim:2,maximum:2,maxlayers:2,maxlist:1,mean:2,member:6,menu:[11,12],merg:[7,8,11],meta:9,method:10,milp:0,minimum:2,minor:[7,8],minut:[13,14,15,16,17,18],miss:[8,21],mkdir:[10,20],mnist10x10:18,mnist:18,mode:[0,17,20],model:[0,3],modeltyp:[0,3],modifi:9,monthli:21,more:[8,9,10,11,15],most:8,mps:21,multipl:9,multiprocess:20,must:[0,2,3,20],name:[0,3,4,6,9,11,12,14,15,19,20,21],nconvolut:15,ndiffer:15,necessari:[9,21],need:[8,9,10,12,17,20,21],net1:[13,18],net2:13,net:17,network:[0,1,2,3,4,6,10,13,14,17,18,19,21,23],neural:[1,2,3,4,10,21,23],neuralnetworkverif:20,nnet:[0,1,2,3,4,17,18,19,21,23],nnet_file_nam:17,nnetfil:[13,18],node:[0,2,4],none:[0,1,2,3,4,6],nonnx:15,normal:[0,2],normalize_input:2,normalize_output:2,note:[10,12,21],notebook:[11,13,14,15,16,17,18,19],notic:22,num:21,number:[0,1,2,3,4,5,8,11,12,14,15,19,21],numberofvari:2,numlay:2,numpi:[1,4,13,14,15,17,18,21],numvar:1,numwork:0,object:[0,1,2,3,4,5,6],obtain:0,older:20,omit:[9,20],ommit:9,onc:21,one:[8,18,19,22],ones:15,onli:[0,7,8,9,20],onlin:[0,11],onlinedivid:0,onnx:[0,1,2,3,4,19,21,23],onnxev:15,onnxruntim:[15,21],onto:7,open:20,oper:[0,3,14,15],option:[0,1,2,3,4,6,9,12,15,16,17,21],order:[8,11,12,19,20],origin:[7,8],other:[5,9,10,13,20,21],otherwis:[0,1,2,3,4,6],out:[0,1,2,3,4],outer:2,output:[0,1,2,3,4,6,11,13,14,15,17,18,21],outputmean:2,outputnam:[0,3,4,14,15],outputrang:2,outputs:2,outputsexpect:13,outputsmarab:13,outputvalu:3,outputvar:[1,13,14,15,17],outputvariablebyindex:6,over:8,own:[7,8,22],packag:21,page:[8,9,10,11,12],pain:8,pair:6,paper:16,parallel:21,paramet:[0,1,2,3,4,5,6],parent:9,parser:21,part:[0,1,2,3,4,5,9,13,14,15,16,17,18],particular:[21,22],partit:0,pass:21,path:[0,1,2,3,4,10,13,17,18,20,21,22],perform:[0,1,2,3,4,6,8],piecewis:[1,2,3,4,23],piecewiselinearfunctiontyp:6,pip:21,place:[17,20,21],placehold:[14,15],plot:11,point:[1,2,3,4,10,13,15],polar:0,portion:10,possibl:[8,22],practic:7,preced:19,prefer:[8,9,20],prefix:[10,11,12,19],present:20,primarili:8,print:[0,1,2,3,4,15,16],privat:9,privileg:8,problem:[0,22],proc:21,proc_num:20,process:[20,21],produc:[15,19,20],progress:8,project:[0,1,2,3,4,5,9,13,14,15,16,17,18],prompt:20,properli:21,properti:[2,6,21,23],protobuf:[0,3],provid:23,pull:[7,10,11,12,21,23],purpos:[8,10],push:[7,8],pybind11:[6,20,23],pybind11_builtin:6,pybind11_object:6,pytest:[10,21],python2:22,python3:[20,22],python:[5,9,11,13,14,15,16,17,18,19,20,23],pythoninterp:22,pythonpath:[10,19,20],queri:[0,1,2,3,4,6,13,15,16,17,18,23],random:2,rang:[2,15,18],rather:22,read:[0,3],read_nnet:[0,13,17,18],read_onnx:[0,15],read_tf:[0,14],readabl:9,readm:[9,11],readtf:3,real:18,reason:[9,10],rebas:8,recommend:[8,21],recomput:2,redirect:[0,1,2,3,4,6],reduc:9,regardless:10,regress:21,regresslevel:21,rel:10,relat:8,releas:20,relev:9,relu:[0,1,2,3,4,6,16],relulist:1,remain:19,remov:8,replac:21,repo:20,repositori:[7,8,20],repres:[0,1,2,3,4,5,6],request:[7,10,21,23],requir:[8,10,18,21],reserv:[0,1,2,3,4,5,9,13,14,15,16,17,18],reset:[1,2,3,4],resetnetworkfromparamet:2,resid:8,resourc:[10,14,15,18,19,21],respect:[0,3,21],restor:0,restoretreest:0,restrict:15,restructredtext:11,restructuredtext:[11,12],restucturedtext:11,result:[2,15,21],return1:9,return2:9,review:[7,8],right:[0,1,2,3,4,5,9,13,14,15,16,17,18],robust:15,root:[10,19,20,21,22],rst:12,rule:[7,19],run:[10,11,13,14,15,16,17,18,19,20,21,22],sai:11,same:[13,15],sat:[15,16,21,23],satisfi:[0,1,2,3,4,6,17,18,23],save:6,savedmodel:[0,3],savedmodel_v1:[0,3],savedmodel_v2:[0,3],savedmodeltag:[0,3],savequeri:[1,2,3,4,6],scalar:[1,2,3,4,5],script:[11,13,14,15,16,17,18],second:[0,11,13,14,15,16,17,18],section:[9,12],see:[0,1,2,3,4,5,9,12,13,14,15,16,17,18,19,20],select:[8,20],self:[6,8],separ:8,sepear:9,serial:[0,1,2,3,4,6],set:[1,2,3,4,5,6,10,13,14,15,16,18,21,22],setlowerbound:[1,2,3,4,6,13,14,15,16,17,18],setnumberofvari:[6,16],setscalar:[5,6,16,18],setup:[12,15,16,22,23],setupperbound:[1,2,3,4,6,14,15,16,18],shantanu:[1,3,5],shape:15,share:[8,20,21],should:[0,2,7,8,9,10,11,12,15,16,17,19,21,22],shouldn:9,show:[9,11,12,19,22,23],shown:9,side:[1,2,3,4],sidran:3,sign:[1,2,3,4,6,11],signlist:1,similar:9,simpl:11,simpli:20,sinc:[14,15],size:[2,14,15],skip:9,small:[8,21],smaller:8,smt:23,snc:[0,17],sncsplittingstrategi:0,solut:[0,1,2,3,4,6],solv:[0,1,2,3,4,6,13,14,15,16,17,18,23],solve_queri:0,solver:[1,2,3,4,14,15,23],solvewithmilp:0,some:[7,9,10,21,22],someth:9,sourc:[0,1,2,3,4,5,6,9,13,14,15,16,17,18,19,20],space:9,specif:21,specifi:[0,1,2,3,4,12,14,15,21],sphinx:[11,13,14,15,16,17,18,19],split:8,splittingstrategi:0,squash:8,src:[13,17,21],standard:[6,11],start:9,stat:[0,1,2,3,4,6,14,15,16,17],state:0,statement:10,statist:[0,1,2,3,4,6,13,18],stats1:[13,18],step:[8,19],still:[21,22],sto:0,store:19,str:[0,1,2,3,4,6],strategi:0,string:[0,1,2,3,4],strpath:10,style:23,sub:[0,21],subfold:12,submit:[7,8],subsect:19,succeed:[7,8],sum_i:[1,2,3,4],suppli:23,support:[5,21],sure:[10,19,21,22],syntax:10,sys:[13,17,18],system:[1,2,3,4,21],tab:9,tag:[0,3],take:[6,9],team:[8,9],tempfil:10,tensorflow:[0,3,19,21,23],term:5,test:[8,9,13,15,18,20,22,23],test_nnet:21,test_requir:21,text:[11,19],thakoor:[1,3,5],than:[8,21,22],thei:[8,9,19],themselv:8,therefor:[8,9],thi:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],thorugh:21,those:21,though:[9,10],three:[21,22],time:[0,13,14,15,16,17,18,21],timeout:0,timeoutfactor:0,timeoutinsecond:0,titl:[8,19],tmpdir:10,tmpfolder:10,toctre:12,too:8,tool:23,top:[0,1,2,3,4,5,9,13,14,15,16,17,18,19],total:[1,2,13,14,15,16,17,18],train:[14,15],travi:[7,8],tree:0,troubleshoot:23,tupl:[0,1,2,3,4,5,6,9],turn:17,two:[2,8,15],txt:21,type:[0,1,2,3,4,5,6,9,20,21],typo:7,underscor:9,understand:9,undon:2,uniformli:2,unit:21,unsat:[0,1,2,3,4,6,15,16,21,23],until:21,updat:[8,9],upper:[1,2,3,4,13,16],upperbound:1,upperboundexist:[1,2,3,4],use:[0,1,2,3,4,8,9,10,19,21,22],used:[0,3,6,8,9,10,11,19,20],useful:8,usemarab:[1,2,3,4],user:[0,3,9,10,11,13,18,22],uses:[20,23],using:[1,2,3,4,8,9,10,11,21,22,23],usvyatsov:2,val:[0,1,2,3,4,6,14,15,17],valid:9,vals1:[13,18],valu:[0,1,2,3,4,6,9,13,15,17,23],var1:6,var2:6,variabl:[0,1,2,3,4,5,6,9,10,13,14,15,16,17,18,20,21,23],varieti:11,vars_i:[1,2,3,4],vector:2,verbos:[0,1,2,3,4,15,17],veri:[7,9],verif:23,version:[0,1,2,3,4,5,9,13,14,15,16,17,18,20,21,22],via:[6,7,8,21],violat:0,wai:[10,11],want:[21,22],warn:21,weekli:21,weight:2,well:[10,20,22],what:21,when:[0,8,9,10,11,13,22],where:[1,2,10,20,21,22],whether:[0,1,2,3,4,20],which:[0,2,7,11,12,17,20],whther:0,why:11,wiki:[7,9],win64:20,window:22,within:[2,21],without:[2,10],word:9,work:[0,8,20],worker:[0,8],workload:20,write:[1,2,3,4,7,8,9,11,19],writennet:2,written:[2,9,10,20],x1b:16,x1f:16,x2b:16,x2f:16,x86:22,y_out:[14,15],yet:9,yml:22,you:[8,9,10,12,13,14,15,18,20,21,22],your:[8,9,10,12,20,22],zip:19},titles:["Marabou","MarabouNetwork","MarabouNetworkNNet","MarabouNetworkTF","MarabouNetworkONNX","MarabouUtils","MarabouCore","Contributing to Marabou","Pull Requests","Coding Style Guidelines","Tests","Examples","Documentation","NNet Example","Tensorflow Example","ONNX Example","MarabouCore Example","DNC Example","Disjunction Constraint Example","&lt;no title&gt;","Installation","Testing","Troubleshooting","Maraboupy"],titleterms:{"32bit":22,"class":9,build:20,code:9,comparison:22,connect:15,constraint:18,contribut:7,convolut:15,correct:22,disjunct:18,dnc:17,docstr:9,document:12,ensur:22,exampl:[11,13,14,15,16,17,18],execut:[21,22],file:[9,10],fulli:15,guidelin:9,instal:20,instruct:20,linux:20,maco:20,marab:[0,7,20,21],maraboucor:[6,16],marabounetwork:1,marabounetworknnet:2,marabounetworkonnx:4,marabounetworktf:3,maraboupi:[21,23],marabouutil:5,max:15,method:9,network:15,neural:15,nnet:13,onnx:15,output:22,pool:15,pull:8,python:[21,22],request:8,studio:20,style:9,temporari:10,tensorflow:14,test:[10,21],travi:22,troubleshoot:22,used:22,using:20,visual:20,window:20,write:10}})