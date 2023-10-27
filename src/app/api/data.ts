import dbConnect from '../../lib/dbConnect';
import Data from '../../models/Data';

export default async function handler(req: any, res: any) {
    console.log('hi');
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const { device, limit } = req.query;

                if (!device || isNaN(Number(limit))) {
                    return res.status(400).json({ success: false, message: "error" });
                }

                const data = await Data.find({ device })
                    .sort({ createdAt: 'desc' })
                    .limit(Number(limit))
                    .exec();

                return res.status(200).json({ code: 200, message: 'ok', data });
            } catch (error) {
                return res.status(500).json({ code: 500, message: 'internal error' });
            }
            break;

        case "POST":
            try {
                const { device, light, moisture } = req.body;
                const now = new Date();
                const data = new Data({
                    device,
                    light,
                    moisture,
                    createdAt: now,
                    updatedAt: now,
                });
                await data.save();
                return res.status(200).json({ code: 200, message: 'ok' });
            } catch (error) {
                return res.status(500).json({ code: 400, message: 'internal err' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}