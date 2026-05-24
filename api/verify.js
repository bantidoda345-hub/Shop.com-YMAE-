export default function handler(req, res) {

const PASSWORD = '9009';

if(req.method !== 'POST'){
return res.status(405).json({
success:false
});
}

const { password } = req.body;

if(password === PASSWORD){

return res.status(200).json({
success:true
});

}else{

return res.status(401).json({
success:false
});

}

}
