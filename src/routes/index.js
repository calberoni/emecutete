import { Router} from "express";
const router = Router()


router.get('/',(req, res) => res.render('index'))
//router.post('/',(req, res) => res.render('index'))
router.post ('/', (req,res) => {
    const reqBroker = req.body.broker
    console.log(reqBroker)
    res.render('index')

})
export default router