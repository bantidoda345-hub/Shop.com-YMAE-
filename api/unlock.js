export default function handler(req,res){

const PIN = process.env.WEB_PASSWORD;

if(req.method !== 'POST'){
return res.status(405).json({
success:false
});
}

const { pin } = req.body;

if(pin === PIN){

return res.status(200).json({
success:true
});

}else{

return res.status(401).json({
success:false
});

}

}
