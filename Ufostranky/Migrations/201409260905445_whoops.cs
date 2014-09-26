namespace Ufostranky.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class whoops : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Article", new[] { "AuthorID" });
            DropIndex("dbo.IDE", new[] { "ProgrammingLanguage_ID" });
            DropIndex("dbo.Paradigm", new[] { "ProgrammingLanguage_ID" });
            DropIndex("dbo.TypingDiscipline", new[] { "ProgrammingLanguage_ID" });
            DropIndex("dbo.ProgrammingLanguageProgrammingLanguage", new[] { "ProgrammingLanguage_ID" });
            DropIndex("dbo.ProgrammingLanguageProgrammingLanguage", new[] { "ProgrammingLanguage_ID1" });
            CreateIndex("dbo.Article", "AuthorId");
            CreateIndex("dbo.IDE", "ProgrammingLanguage_Id");
            CreateIndex("dbo.Paradigm", "ProgrammingLanguage_Id");
            CreateIndex("dbo.TypingDiscipline", "ProgrammingLanguage_Id");
            CreateIndex("dbo.ProgrammingLanguageProgrammingLanguage", "ProgrammingLanguage_Id");
            CreateIndex("dbo.ProgrammingLanguageProgrammingLanguage", "ProgrammingLanguage_Id1");
        }
        
        public override void Down()
        {
            DropIndex("dbo.ProgrammingLanguageProgrammingLanguage", new[] { "ProgrammingLanguage_Id1" });
            DropIndex("dbo.ProgrammingLanguageProgrammingLanguage", new[] { "ProgrammingLanguage_Id" });
            DropIndex("dbo.TypingDiscipline", new[] { "ProgrammingLanguage_Id" });
            DropIndex("dbo.Paradigm", new[] { "ProgrammingLanguage_Id" });
            DropIndex("dbo.IDE", new[] { "ProgrammingLanguage_Id" });
            DropIndex("dbo.Article", new[] { "AuthorId" });
            CreateIndex("dbo.ProgrammingLanguageProgrammingLanguage", "ProgrammingLanguage_ID1");
            CreateIndex("dbo.ProgrammingLanguageProgrammingLanguage", "ProgrammingLanguage_ID");
            CreateIndex("dbo.TypingDiscipline", "ProgrammingLanguage_ID");
            CreateIndex("dbo.Paradigm", "ProgrammingLanguage_ID");
            CreateIndex("dbo.IDE", "ProgrammingLanguage_ID");
            CreateIndex("dbo.Article", "AuthorID");
        }
    }
}
