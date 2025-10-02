// class categoryclass{
//     static {categoryclass.catagoryinfo=[
//         {
//             "_id": "68af2725685370695acf1e6e",
//             "name":"muhammad",
//             "class":12,
//             "color":"rgba(16, 254, 64, 1)",
//             "rank":4
//         },
//           {
//             "_id": "68af2725685370695acf1e6a",
//             "name":"ali",
//             "class":12,
//             "color":"rgba(192, 232, 114, 1)",
//             "rank":4
//         },
//           {
//             "_id": "68af2725685370695acf1e6az",
//             "name":"ummar",
//             "class":12,
//             "color":"#eaf112ff",
//             "rank":4
//         }
//     ]};
//     constructor(){};
//      GETALL(req,res){
//         try {
//             return res.status(200).json(categoryclass.catagoryinfo)
            
//         } catch (e) {
//             return res.status(500).json({ type: "Server Error", code: 500, message: e.message })
//         }
//     }
//     GETBYID(req,res){
//       try {
//           const id = req.params.id;
//         const found=categoryclass.catagoryinfo.find(c=>c._id==id)
//         if(found)return res.status(200).json(found);
//         return res.status(404).json({"type":"client side error","code":404,"massage":"the error is in json side"});
//       } catch (e) {
//         return res.status(500).json({"type":"server error","code":500,"massage":e.massage});
//       }


//     }
// }
// const controller= new categoryclass();
// module.exports=controller;