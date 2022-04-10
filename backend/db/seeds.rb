# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SAMPLE_TODOS = [
    {
        name: "sampleTarou01",
        email: "tarou01@example.com",
        password: "hogehoge",
        password_confirmation: "hogehoge"
    },
    {
        name: "sampleTarou02",
        email: "tarou02@example.com",
        password: "hogehoge",
        password_confirmation: "hogehoge"
    },
    {
        name: "sampleTarou03",
        email: "tarou03@example.com",
        password: "hogehoge",
        password_confirmation: "hogehoge"
    },
]

SAMPLE_TODOS.each do |todo|
    User.create(todo)
end