const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const gitBaseUrl = "https://git-scm.com/docs/git-";

const exampleEmbed = new EmbedBuilder()
  .setColor("Orange")
  .setTitle("Git commands: ")
  .setDescription(
    "commands in parentheses are zsh aliases. To learn more, click on the link."
  )
  .addFields(
    {
      name: "$ git init [project-name]",
      value: `initialize git in repo.\nURL: ${gitBaseUrl}init`,
    },
    {
      name: "$ git clone [url]",
      value: `clone remote repo to machine.\nURL: ${gitBaseUrl}clone`,
    },
    {
      name: "$ git push (gp)",
      value: `git push to remote directory.\nURL: ${gitBaseUrl}push`,
    },
    {
      name: "$ git pull (gl)",
      value: `git pull from remote directory.\nURL: ${gitBaseUrl}pull`,
    },
    {
      name: "$ git commit (gc)",
      value: `saves changes made to the index in a new commit in the repository history, accept tags. \nURL: ${gitBaseUrl}commit`,
    },
    {
      name: "$ git add (ga)",
      value: `adds files to the git index to prepare them for a commit. \nURL: ${gitBaseUrl}add`,
    },
    {
      name: "$ git status (gst)",
      value: `exibs current state of repo, including modified, deleted and added archives. \nURL: ${gitBaseUrl}status`,
    },
    {
      name: "$ git branch (gb)",
      value: `list all branchs listed in local repo. \nURL: ${gitBaseUrl}branch`,
    },
    {
      name: "$ git checkout (gco)",
      value: `alter current branch to other branch or specific commit. \nURL: ${gitBaseUrl}checkout`,
    },
    {
      name: "$ git merge (gm)",
      value: `combines changes from two or more branches into a single branch. \nURL: ${gitBaseUrl}merge`,
    },
    {
      name: "$ git log (glo)",
      value: `exibs commit history of repo(log). \nURL: ${gitBaseUrl}log`,
    },
    {
      name: "$ git diff (gd)",
      value: `display the differences between two files, branchs or commits.\nURL: ${gitBaseUrl}diff`,
    },
    {
      name: "$ git stash (gsta)",
      value: `temporarily saves changes to a stash to be applied later.\nURL: ${gitBaseUrl}stash`,
    },
    {
      name: "$ git stash pop (gstp)",
      value: `return files stashed.\nURL: ${gitBaseUrl}stash`,
    },
    {
      name: "$ git reset (grh)",
      value: `undo changes to a specific commit or set of commits.\nURL: ${gitBaseUrl}reset`,
    },
    {
      name: "$ git rm (grm)",
      value: `remove one archive from git indice and work directory. \nURL: ${gitBaseUrl}rm`,
    },
    {
      name: "$ git tag (gts)",
      value: `tag a specific commit with a tag for easy refference. \nURL: ${gitBaseUrl}tag`,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Remember git commands!"),
  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
