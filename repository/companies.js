const db = require("../models");

module.exports.getCompanyRating = async (id) => {
	try{
		console.log(id)
		const reviews = await db.Review.findAll()

		var totalReviews = 0
		var generalTotal = 0.0
		var comfortTotal = 0.0 

		for (let review of reviews){
			const route = await db.Route.findOne({
				where: { id: review.dataValues.routeId, companyId : id },
			});

			if (route !== null){
				totalReviews += 1 
				generalTotal += review.dataValues.generalRating
				comfortTotal += review.dataValues.comfortRating
			}
		}
		if (totalReviews > 0)
			return generalTotal / totalReviews
		
		return 0.0
	}catch(err){
		console.error(err)
		return null
	}
}

module.exports.createCompany = async (args) => {
	const { name } = args;
	console.log("args are ", args);
	try {
		const newCompany = await db.Company.create({
			name,
		});
		return newCompany;
	} catch (err) {
		console.error(err);
		return null;
	}
};

module.exports.deleteCompany = async (id) => {
	try {
		const companyToDelete = await db.Company.findOne({
			where: {
				id,
			},
		});
		if (companyToDelete == null) {
			return {
				status: "no Company with said id",
			};
		}
		companyToDelete.destroy();
		return { status: "success" };
	} catch (err) {
		console.error(err);
		return null;
	}
};

module.exports.getAllCompanies = async () => {
	try {
		const companies = await db.Company.findAll();
		return companies;
	} catch (err) {
		console.error(err);
		return null;
	}
};

module.exports.getCompany = async (id) => {
	try {
		const CompanyById = await db.Company.findOne({ where: { id } });
		return CompanyById;
	} catch (err) {
		console.error(err);
		return null;
	}
};
