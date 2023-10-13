import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: String,
    password: String,
    code: String,
    ID: String,
    grade: String,
    school: mongoose.SchemaTypes.ObjectId,
    class: mongoose.SchemaTypes.ObjectId,
    quizzes: [{
        subject: String,
        mark: String,
        date: String
    }],
    absent: [{
        date: String,
        teacher: String,
    }],
    warnings: Number,
    reports: [mongoose.SchemaTypes.ObjectId]
});

studentSchema.methods.warnings = function () {
    if (self.absent.length >= 30) {
        self.warnings = self.warnings + 1;
    }
    return {
        absent: this.absent.length,
        warnings: this.warnings.length
    }
}


module.exports = mongoose.model("Student", studentSchema)