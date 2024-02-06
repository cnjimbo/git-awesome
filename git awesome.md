# Common types according to commitlint-config-conventional (based on the Angular convention)

The commit message types you've listed are based on the Angular convention, which is also adopted by many other projects through tools like `commitlint` and the `commitlint-config-conventional` configuration. Here's a brief explanation of each type:

1. **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
   - 示例：`build(deps): upgrade webpack to v5`

2. **chore**: Changes to the build process or auxiliary tools and libraries, maintain scripts, etc., not affecting the source code or package itself.
   - 示例：`chore(package): update devDependencies`

3. **ci**: Changes related to continuous integration, such as adding or updating CI/CD pipelines, configurations, or test runners.
   - 示例：`ci(travis): add cache for node_modules`

4. **docs**: Documentation-only changes.
   - 示例：`docs(readme): update getting started guide`

5. **feat**: A new feature for the application or library.
   - 示例：`feat(user): add forgot password functionality`

6. **fix**: A bug fix in the codebase.
   - 示例：`fix(auth): correct login validation error`

7. **perf**: Changes that improve performance.
   - 示例：`perf(caching): optimize image loading`

8. **refactor**: Code changes that neither fix bugs nor add features, but change the structure or format of existing code.
   - 示例：`refactor(components): move utility functions to separate module`

9. **revert**: Reverts a previous commit.
   - 示例：`revert(feat#123): revert "feat(user): add forgotten password functionality"`

10. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    - 示例：`style: apply prettier formatting throughout project`

11. **test**: Adding missing tests or correcting existing tests.
    - 示例：`test(login): add unit tests for authentication service`

这些类型有助于团队成员通过Commitizen等工具遵循一致的提交信息规范，使得项目历史更易于理解和维护。同时，它们可以被自动化工具利用来生成CHANGELOG、触发持续集成流程中的特定步骤以及进行版本管理。
