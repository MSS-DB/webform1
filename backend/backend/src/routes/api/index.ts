// Express
import {
  Request,
  Response,
  Router,
  Router as routerClass
} from "express"

// Helper
// import {apiQueryBuilder} from '../../helper/queryHelper'
// import {authorizeMiddleware} from '../../helper/auth'

// Config
import {version, CODE} from '../../config'
import DbApp from "../../database"

// Models
// import dataSource from "../../model"
// import {ObjectLiteral, SelectQueryBuilder} from "typeorm"

const router:Router = routerClass()

// Authorization required
// router.use(authorizeMiddleware)

// GET
router.get('/', (req: Request, res: Response) => {
  res.json({
    version,
  })
})

// GET
router.get('/:model', async (req: Request, res: Response) => {
  const model = req.params.model
  try {
    const {id} = req.query
    const data = await DbApp.manager.find(model)


    res.json({
      version,
      model,
      id,
      data,
    })

  } catch (error) {
    console.log(error)
    res.status(CODE.CLIENT_ERROR.BAD_REQUEST).json({
      status: false,
      message: 'Bad request',
    })
  }
})

// GET
/*router.get('/:model', auth, async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const model = req?.params?.model
    // const userData: string|undefined = req.session?.['user_data']?.[0];
    /!*const {
      pfNumber,
      ...properties
    }: { items_per_page: number, id: string, properties: object }|ParsedQs = req.query*!/
    req.query

    const Model = await dataSource.manager.getRepository(model)

    const pfNumber = undefined;
    const items_per_page = 20;
    const properties = {};
    if (pfNumber) {
      const data: ObjectLiteral | null = await Model.findOneBy({pfNumber})

      res.json({
        status: true,
        message: SUCCESS.MODEL_GET_SUCCESS(model),
        data,
      })
    } else {
      const query: SelectQueryBuilder<ObjectLiteral> = Model.createQueryBuilder()
      const built: ObjectLiteral | null = await apiQueryBuilder(query, {
        limit: items_per_page,
        ...properties,
      })

      const data = await built.getMany()

      const totalItemsQuery: SelectQueryBuilder<ObjectLiteral> = await apiQueryBuilder(query, {
        count: true,
        ...properties,
      })

      const dataCount = await totalItemsQuery.getCount()

      return res.json({
        status: true,
        message: SUCCESS.MODEL_GET_SUCCESS(model),
        pages: Math.ceil(dataCount / items_per_page),
        data,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(CODE.CLIENT_ERROR.BAD_REQUEST).json({
      status: false,
      message: 'Bad request',
    })
  }

    /!*
  *!/
  }
)*/

// POST
/*router.post('/:model', async (req, res) => {
  try {
    // Store record into database
    const Model = Models[req.params.model]
    await Model.create({
      ...req.body,
    })

    // Return create status
    return res.status(CODE_SUCCESS.CREATED).json({
      message: SUCCESS.MODEL_CREATE_SUCCESS,
    })
  } catch (error) {
    console.log(error)
    // return processError(req, res, error, `${ERROR.MODEL_CREATE_ERROR} ${req.params.model}`)
  }
})*/

// PUT
/*router.put('/:model', async (req, res) => {
  try {
    // Store record into database
    const Model = Models[req.params.model]
    await Model.findByIdAndUpdate(req.body._id, {
      ...req.body,
    }).exec()

    // Return create status
    return res.status(CODE_SUCCESS.RESET_CONTENT).json({
      message: `${SUCCESS.MODEL_UPDATE_SUCCESS} ${req.params.model}`,
    })
  } catch (error) {
    console.log(error)
  }
})*/

// DELETE
/*router.delete('/:model', async (req, res) => {
  try {
    // Store record into database
    const Model = Models[req.params.model]
    await Model.findByIdAndDelete(req.body._id).exec()

    // Return create status
    return res.status(CODE_SUCCESS.NO_CONTENT).json({
      message: `${SUCCESS.MODEL_DELETE_SUCCESS} ${req.params.model}`,
    })
  } catch (error) {
    console.log(error)
  }
})*/

export default router
